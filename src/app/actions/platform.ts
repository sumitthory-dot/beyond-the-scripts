"use server";

import { revalidatePath } from "next/cache";
import {
  commentSchema,
  contactSchema,
  feedbackSchema,
  newsletterSchema,
} from "@/lib/validation";
import { sendWelcomeEmail } from "@/lib/resend";
import { createServiceSupabaseClient } from "@/lib/supabase/server";

export type ActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

const missingConfigMessage =
  "Platform storage is ready, but Supabase environment variables are not configured yet.";

type InsertResult = Promise<{ error: { message: string } | null }>;
type PlatformClient = {
  from: (table: "subscribers" | "contacts" | "feedback" | "comments") => {
    insert: (payload: unknown) => InsertResult;
    select: (columns: string) => {
      eq: (column: string, value: string) => {
        maybeSingle: () => Promise<{ data: { id: string } | null; error: { message: string } | null }>;
      };
    };
  };
};

type NewsletterLogClient = {
  from: (table: "newsletter_logs") => {
    insert: (payload: unknown) => InsertResult;
  };
};

export async function subscribeToNewsletter(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = newsletterSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: missingConfigMessage };
  const platform = supabase as unknown as PlatformClient;

  const email = parsed.data.email.toLowerCase();
  const existing = await platform
    .from("subscribers")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing.data) {
    return { ok: true, message: "You are already subscribed." };
  }

  const result = await platform.from("subscribers").insert({
    name: parsed.data.name,
    email,
  });

  if (result.error) {
    return { ok: false, message: result.error.message };
  }

  const emailResult = await sendWelcomeEmail(email, parsed.data.name);
  const logClient = supabase as unknown as NewsletterLogClient;
  await logClient.from("newsletter_logs").insert({
    email,
    subject: "Welcome to Beyond The Scripts",
    status:
      "error" in emailResult && emailResult.error ? "failed" : "sent",
    provider_id:
      "data" in emailResult && emailResult.data?.id ? emailResult.data.id : null,
  });
  revalidatePath("/");
  return { ok: true, message: "You are subscribed. Welcome to the list." };
}

export async function submitContact(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: missingConfigMessage };
  const platform = supabase as unknown as PlatformClient;

  const result = await platform.from("contacts").insert({
    name: parsed.data.name,
    email: parsed.data.email.toLowerCase(),
    message: parsed.data.message,
  });

  if (result.error) {
    return { ok: false, message: result.error.message };
  }

  return { ok: true, message: "Message received. We will reply thoughtfully." };
}

export async function submitFeedback(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = feedbackSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: missingConfigMessage };
  const platform = supabase as unknown as PlatformClient;

  const result = await platform.from("feedback").insert({
    name: parsed.data.name,
    email: parsed.data.email.toLowerCase(),
    feedback: parsed.data.feedback,
  });

  if (result.error) {
    return { ok: false, message: result.error.message };
  }

  return { ok: true, message: "Feedback received. Thank you for shaping the platform." };
}

export async function postComment(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = commentSchema.safeParse({
    articleId: formData.get("articleId"),
    parentId: formData.get("parentId") || undefined,
    name: formData.get("name"),
    comment: formData.get("comment"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) return { ok: false, message: missingConfigMessage };
  const platform = supabase as unknown as PlatformClient;

  const result = await platform.from("comments").insert({
    article_id: parsed.data.articleId,
    parent_id: parsed.data.parentId ?? null,
    name: parsed.data.name,
    comment: parsed.data.comment,
  });

  if (result.error) {
    return { ok: false, message: result.error.message };
  }

  revalidatePath("/stories");
  return { ok: true, message: "Comment posted." };
}
