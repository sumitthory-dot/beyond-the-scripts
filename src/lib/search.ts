import "server-only";

import { createServiceSupabaseClient } from "@/lib/supabase/server";

export async function searchPlatform(query: string) {
  const normalized = query.trim();
  if (!normalized) return { stories: [], articles: [] };

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { stories: [], articles: [] };

  const [stories, articles] = await Promise.all([
    supabase
      .from("stories")
      .select("id,slug,title,description,reading_time,published")
      .eq("published", true)
      .textSearch("title", normalized)
      .limit(8),
    supabase
      .from("articles")
      .select("id,slug,title,description,article_type,reading_time,published")
      .eq("published", true)
      .textSearch("title", normalized)
      .limit(8),
  ]);

  return {
    stories: stories.data ?? [],
    articles: articles.data ?? [],
  };
}
