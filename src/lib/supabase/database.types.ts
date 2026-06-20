export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      subscribers: {
        Row: {
          id: string;
          name: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["subscribers"]["Insert"]>;
      };
      feedback: {
        Row: {
          id: string;
          name: string;
          email: string;
          feedback: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          feedback: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["feedback"]["Insert"]>;
      };
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contacts"]["Insert"]>;
      };
      comments: {
        Row: {
          id: string;
          article_id: string;
          parent_id: string | null;
          name: string;
          comment: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          article_id: string;
          parent_id?: string | null;
          name: string;
          comment: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["comments"]["Insert"]>;
      };
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: "reader" | "admin";
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "reader" | "admin";
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      categories: {
        Row: { id: string; name: string; slug: string; created_at: string };
        Insert: { id?: string; name: string; slug: string; created_at?: string };
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };
      tags: {
        Row: { id: string; name: string; slug: string; created_at: string };
        Insert: { id?: string; name: string; slug: string; created_at?: string };
        Update: Partial<Database["public"]["Tables"]["tags"]["Insert"]>;
      };
      stories: {
        Row: ContentRow & { chapters: Json | null; series: string | null };
        Insert: ContentInsert & { chapters?: Json | null; series?: string | null };
        Update: Partial<Database["public"]["Tables"]["stories"]["Insert"]>;
      };
      articles: {
        Row: ContentRow & { article_type: ArticleType };
        Insert: ContentInsert & { article_type: ArticleType };
        Update: Partial<Database["public"]["Tables"]["articles"]["Insert"]>;
      };
      bookmarks: {
        Row: {
          id: string;
          user_id: string;
          content_id: string;
          content_type: "story" | "article";
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content_id: string;
          content_type: "story" | "article";
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["bookmarks"]["Insert"]>;
      };
      reading_history: {
        Row: {
          id: string;
          user_id: string;
          content_id: string;
          content_type: "story" | "article";
          progress: number;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content_id: string;
          content_type: "story" | "article";
          progress?: number;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["reading_history"]["Insert"]>;
      };
      newsletter_logs: {
        Row: {
          id: string;
          subscriber_id: string | null;
          email: string;
          subject: string;
          status: "queued" | "sent" | "failed";
          provider_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          subscriber_id?: string | null;
          email: string;
          subject: string;
          status?: "queued" | "sent" | "failed";
          provider_id?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["newsletter_logs"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type ArticleType = "business" | "startup" | "affiliate" | "ai_tools";

type ContentRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  cover_image: string | null;
  category_id: string | null;
  tags: string[];
  reading_time: string;
  featured: boolean;
  published: boolean;
  content: string;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};

type ContentInsert = {
  id?: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  cover_image?: string | null;
  category_id?: string | null;
  tags?: string[];
  reading_time: string;
  featured?: boolean;
  published?: boolean;
  content: string;
  seo_title?: string | null;
  seo_description?: string | null;
  created_at?: string;
  updated_at?: string;
  published_at?: string | null;
};
