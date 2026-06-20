"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Send } from "lucide-react";
import { submitFeedback } from "@/app/actions/platform";

export function FeedbackForm() {
  const [state, formAction] = useActionState(submitFeedback, {
    ok: false,
    message: "",
  });

  return (
    <form
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8"
      action={formAction}
      noValidate
    >
      {state.message ? (
        <div
          className={`mb-5 flex items-start gap-3 rounded-2xl border p-4 text-sm ${
            state.ok
              ? "border-emerald-100 bg-emerald-50 text-emerald-800"
              : "border-rose-100 bg-rose-50 text-rose-700"
          }`}
          role="status"
        >
          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5" />
          <p>{state.message}</p>
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          error={state.fieldErrors?.name?.[0]}
          label="Name"
          name="name"
          placeholder="Your name"
        />
        <InputField
          error={state.fieldErrors?.email?.[0]}
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
      </div>
      <label className="mt-5 grid gap-2">
        <span className="text-sm font-semibold text-slate-950">Feedback</span>
        <textarea
          aria-invalid={Boolean(state.fieldErrors?.feedback)}
          className="min-h-32 resize-y rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          name="feedback"
          placeholder="What would make Beyond The Scripts more useful?"
        />
        {state.fieldErrors?.feedback ? (
          <span className="text-sm text-rose-600">{state.fieldErrors.feedback[0]}</span>
        ) : null}
      </label>
      <FeedbackButton />
    </form>
  );
}

function InputField({
  error,
  label,
  name,
  placeholder,
  type = "text",
}: {
  error?: string;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        aria-invalid={Boolean(error)}
        className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}

function FeedbackButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 sm:w-auto disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : "Submit feedback"}
      <Send aria-hidden="true" className="size-4" />
    </button>
  );
}
