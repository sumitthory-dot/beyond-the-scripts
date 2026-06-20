"use server";

import { contentSchema } from "@/lib/validation";
import { createServiceSupabaseClient } from "@/lib/supabase/server";
import type { ActionState } from "@/app/actions/platform";
import type { ArticleType } from "@/lib/supabase/database.types";

type UpsertClient = {
  from: (table: "articles" | "stories") => {
    upsert: (payload: unknown) => Promise<{ error: { message: string } | null }>;
  };
};

export async function saveArticleDraft(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  return saveContent("articles", formData);
}

export async function saveStoryDraft(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  return saveContent("stories", formData);
}

async function saveContent(table: "articles" | "stories", formData: FormData) {
  const parsed = contentSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    author: formData.get("author"),
    coverImage: formData.get("coverImage"),
    categoryId: formData.get("categoryId") || undefined,
    tags: String(formData.get("tags") ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    readingTime: formData.get("readingTime"),
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    content: formData.get("content"),
    seoTitle: formData.get("seoTitle") || undefined,
    seoDescription: formData.get("seoDescription") || undefined,
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    return {
      ok: false,
      message: "Content storage is ready, but Supabase environment variables are not configured yet.",
    };
  }

  const payload = {
    slug: parsed.data.slug,
    title: parsed.data.title,
    description: parsed.data.description,
    author: parsed.data.author,
    cover_image: parsed.data.coverImage || null,
    category_id: parsed.data.categoryId || null,
    tags: parsed.data.tags,
    reading_time: parsed.data.readingTime,
    featured: parsed.data.featured,
    published: parsed.data.published,
    content: parsed.data.content,
    seo_title: parsed.data.seoTitle ?? null,
    seo_description: parsed.data.seoDescription ?? null,
    published_at: parsed.data.published ? new Date().toISOString() : null,
  };

  const contentClient = supabase as unknown as UpsertClient;

  const result =
    table === "articles"
      ? await contentClient.from("articles").upsert({
          ...payload,
          article_type: String(formData.get("articleType") ?? "business") as ArticleType,
        })
      : await contentClient.from("stories").upsert({
          ...payload,
          chapters: [],
          series: String(formData.get("series") ?? "") || null,
        });

  if (result.error) return { ok: false, message: result.error.message };
  return { ok: true, message: `${table === "articles" ? "Article" : "Story"} saved.` };
}
