"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { postComment } from "@/app/actions/platform";
import { EmptyState } from "@/components/EmptyState";

const maxCommentLength = 280;

export function CommentSection() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [state, formAction] = useActionState(postComment, {
    ok: false,
    message: "",
  });

  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Comments
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Reader conversation
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Comment storage is ready for a future database. For now, this UI
            validates input and shows the intended loading and success states.
          </p>
          <div className="mt-8">
            <EmptyState
              message="Be the first to leave a thoughtful note once comments are connected."
              title="No comments yet"
              variant="comments"
            />
          </div>
        </div>

        <form
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8"
          action={formAction}
          noValidate
        >
          <input name="articleId" type="hidden" value="stories-index" />
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
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-950">Name</span>
            <input
              aria-invalid={Boolean(state.fieldErrors?.name)}
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              name="name"
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              value={name}
            />
            {state.fieldErrors?.name ? <span className="text-sm text-rose-600">{state.fieldErrors.name[0]}</span> : null}
          </label>
          <label className="mt-5 grid gap-2">
            <span className="text-sm font-semibold text-slate-950">Comment</span>
            <textarea
              aria-invalid={Boolean(state.fieldErrors?.comment)}
              className="min-h-32 resize-y rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              maxLength={maxCommentLength}
              name="comment"
              onChange={(event) => setComment(event.target.value)}
              placeholder="Share a thoughtful note."
              value={comment}
            />
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-rose-600">{state.fieldErrors?.comment?.[0]}</span>
              <span className="text-xs text-slate-500">
                {comment.length}/{maxCommentLength}
              </span>
            </div>
          </label>
          <CommentButton />
        </form>
      </div>
    </section>
  );
}

function CommentButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 sm:w-auto disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      <MessageSquare aria-hidden="true" className="size-4" />
      {pending ? "Posting..." : "Post comment"}
    </button>
  );
}
