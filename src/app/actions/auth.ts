"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type AuthState = {
  ok: boolean;
  message: string;
};

export async function signInWithEmail(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!email.includes("@")) {
    return { ok: false, message: "Enter a valid email address." };
  }

  const supabase = createServerSupabaseClient();
  if (!supabase) {
    return {
      ok: false,
      message: "Supabase Auth is ready, but environment variables are not configured yet.",
    };
  }

  const origin = (await headers()).get("origin") ?? "";
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${origin}/profile` },
  });

  if (error) return { ok: false, message: error.message };
  return { ok: true, message: "Check your email for a secure login link." };
}

export async function signInWithGoogle() {
  const supabase = createServerSupabaseClient();
  if (!supabase) redirect("/login?error=missing-supabase");

  const origin = (await headers()).get("origin") ?? "";
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${origin}/profile` },
  });

  if (error || !data.url) redirect("/login?error=google");
  redirect(data.url);
}
