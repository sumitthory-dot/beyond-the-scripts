"use client";

import { useActionState } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { signInWithEmail, signInWithGoogle } from "@/app/actions/auth";

const initialState = { ok: false, message: "" };

export function AuthPanel() {
  const [state, formAction, isPending] = useActionState(
    signInWithEmail,
    initialState,
  );

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
      <form action={formAction}>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-950">Email</span>
          <input
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        {state.message ? (
          <p
            className={`mt-4 text-sm ${state.ok ? "text-emerald-700" : "text-rose-600"}`}
            role="status"
          >
            {state.message}
          </p>
        ) : null}
        <button
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-slate-800 disabled:opacity-70"
          disabled={isPending}
          type="submit"
        >
          <Mail aria-hidden="true" className="size-4" />
          {isPending ? "Sending..." : "Email login link"}
        </button>
      </form>

      <form action={signInWithGoogle}>
        <button
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
          type="submit"
        >
          <ShieldCheck aria-hidden="true" className="size-4" />
          Continue with Google
        </button>
      </form>
    </div>
  );
}
