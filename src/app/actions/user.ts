"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/supabase/auth";
import { createServiceSupabaseClient } from "@/lib/supabase/server";

export type UserFeatureState = {
  ok: boolean;
  message: string;
};

type UserFeatureClient = {
  from: (table: "bookmarks" | "reading_history") => {
    upsert: (payload: unknown) => Promise<{ error: { message: string } | null }>;
    delete: () => {
      eq: (column: string, value: string) => {
        eq: (column: string, value: string) => {
          eq: (column: string, value: string) => Promise<{ error: { message: string } | null }>;
        };
      };
    };
  };
};

export async function saveBookmark(
  _previousState: UserFeatureState,
  formData: FormData,
): Promise<UserFeatureState> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: "Sign in to save bookmarks." };

  const contentId = String(formData.get("contentId") ?? "");
  const contentType = String(formData.get("contentType") ?? "");

  if (!contentId || !["story", "article"].includes(contentType)) {
    return { ok: false, message: "Invalid bookmark target." };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase is not configured yet." };

  const client = supabase as unknown as UserFeatureClient;
  const result = await client.from("bookmarks").upsert({
    user_id: user.id,
    content_id: contentId,
    content_type: contentType,
  });

  if (result.error) return { ok: false, message: result.error.message };
  revalidatePath("/profile");
  return { ok: true, message: "Saved to your library." };
}

export async function removeBookmark(
  _previousState: UserFeatureState,
  formData: FormData,
): Promise<UserFeatureState> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: "Sign in to manage bookmarks." };

  const contentId = String(formData.get("contentId") ?? "");
  const contentType = String(formData.get("contentType") ?? "");
  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase is not configured yet." };

  const client = supabase as unknown as UserFeatureClient;
  const result = await client
    .from("bookmarks")
    .delete()
    .eq("user_id", user.id)
    .eq("content_id", contentId)
    .eq("content_type", contentType);

  if (result.error) return { ok: false, message: result.error.message };
  revalidatePath("/profile");
  return { ok: true, message: "Removed from your library." };
}

export async function recordReadingHistory(
  contentId: string,
  contentType: "story" | "article",
  progress: number,
) {
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: "Sign in to track reading history." };

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase is not configured yet." };

  const boundedProgress = Math.max(0, Math.min(100, Math.round(progress)));
  const client = supabase as unknown as UserFeatureClient;
  const result = await client.from("reading_history").upsert({
    user_id: user.id,
    content_id: contentId,
    content_type: contentType,
    progress: boundedProgress,
    updated_at: new Date().toISOString(),
  });

  if (result.error) return { ok: false, message: result.error.message };
  return { ok: true, message: "Reading progress updated." };
}
