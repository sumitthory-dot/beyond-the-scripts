"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { submitContact } from "@/app/actions/platform";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, {
    ok: false,
    message: "",
  });

  return (
    <motion.form
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      action={formAction}
      noValidate
    >
      {state.message ? (
        <div
          className={`mb-6 rounded-2xl border p-4 text-sm ${
            state.ok
              ? "border-emerald-100 bg-emerald-50 text-emerald-800"
              : "border-rose-100 bg-rose-50 text-rose-700"
          }`}
          role="status"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5" />
            <p>
              {state.message}
            </p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5">
        <Field
          error={state.fieldErrors?.name?.[0]}
          label="Name"
          name="name"
          placeholder="Your name"
        />
        <Field
          error={state.fieldErrors?.email?.[0]}
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-950">Message</span>
          <textarea
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
            className="min-h-36 resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
            name="message"
            placeholder="Tell us what you are building or what you want to collaborate on."
          />
          {state.fieldErrors?.message ? (
            <span className="text-sm text-rose-600" id="message-error">
              {state.fieldErrors.message[0]}
            </span>
          ) : null}
        </label>
      </div>

      <SubmitButton />
    </motion.form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/80 outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 sm:w-auto disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? "Sending..." : "Send Message"}
      <Send aria-hidden="true" className="size-4" />
    </button>
  );
}

function Field({
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
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error ? (
        <span className="text-sm text-rose-600" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
