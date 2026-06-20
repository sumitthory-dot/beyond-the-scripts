"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormRegisterReturn } from "react-hook-form";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/platform";
import type { ActionState } from "@/app/actions/platform";
import { newsletterSchema, type NewsletterInput } from "@/lib/validation";

const initialState: ActionState = { ok: false, message: "" };

export function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [state, formAction] = useActionState(
    async (previousState: typeof initialState, formData: FormData) => {
      const result = await subscribeToNewsletter(previousState, formData);
      if (result.ok) setIsSubscribed(true);
      return result;
    },
    initialState,
  );
  const {
    formState: { errors },
    register,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-950 p-6 shadow-2xl shadow-slate-200 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.24),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.22),transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
                <Sparkles aria-hidden="true" className="size-4" />
                Weekly signal for thoughtful builders
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Join the Beyond The Scripts newsletter.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Get useful stories, startup thinking, AI workflows, and reader
                notes prepared for a future backend integration.
              </p>
            </div>

            <form
              className="rounded-3xl border border-white/10 bg-white p-5 shadow-xl sm:p-6"
              action={formAction}
              noValidate
            >
              {isSubscribed || state.message ? (
                <div
                  className={`mb-5 flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                    state.ok || isSubscribed
                      ? "border-emerald-100 bg-emerald-50 text-emerald-800"
                      : "border-rose-100 bg-rose-50 text-rose-700"
                  }`}
                  role="status"
                >
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5" />
                  <p>{state.message || "You are on the list."}</p>
                </div>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2">
                <NewsletterField
                  error={errors.name?.message || state.fieldErrors?.name?.[0]}
                  label="Name"
                  registration={register("name")}
                  placeholder="Your name"
                />
                <NewsletterField
                  error={errors.email?.message || state.fieldErrors?.email?.[0]}
                  label="Email"
                  registration={register("email")}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <NewsletterButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterField({
  error,
  label,
  placeholder,
  registration,
  type = "text",
}: {
  error?: string;
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  type?: string;
}) {
  const id = `newsletter-${label.toLowerCase()}`;
  const errorId = `${id}-error`;

  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
        placeholder={placeholder}
        type={type}
        {...registration}
      />
      {error ? (
        <span className="text-sm text-rose-600" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

function NewsletterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 sm:w-auto disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      <Mail aria-hidden="true" className="size-4" />
      {pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}
