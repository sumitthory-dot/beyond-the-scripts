"use client";

import { useActionState } from "react";
import type { ActionState } from "@/app/actions/platform";
import { saveArticleDraft, saveStoryDraft } from "@/app/actions/content";

const initialState: ActionState = { ok: false, message: "" };

export function ContentEditorForm({ type }: { type: "article" | "story" }) {
  const action = type === "article" ? saveArticleDraft : saveStoryDraft;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form
      action={formAction}
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field error={state.fieldErrors?.title?.[0]} label="Title" name="title" placeholder="A useful article title" />
        <Field error={state.fieldErrors?.slug?.[0]} label="Slug" name="slug" placeholder="useful-article-title" />
        <Field error={state.fieldErrors?.author?.[0]} label="Author" name="author" placeholder="Beyond Desk" />
        <Field error={state.fieldErrors?.readingTime?.[0]} label="Reading time" name="readingTime" placeholder="7 min read" />
        <Field error={state.fieldErrors?.coverImage?.[0]} label="Cover image" name="coverImage" placeholder="https://..." />
        <Field error={state.fieldErrors?.tags?.[0]} label="Tags" name="tags" placeholder="ai, startups, systems" />
        {type === "article" ? (
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-950">Article type</span>
            <select
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              name="articleType"
            >
              <option value="business">Business</option>
              <option value="startup">Startup</option>
              <option value="affiliate">Affiliate Marketing</option>
              <option value="ai_tools">AI Tools</option>
            </select>
          </label>
        ) : (
          <Field label="Series" name="series" placeholder="Builder Notes" />
        )}
      </div>
      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold text-slate-950">Description</span>
        <textarea
          className="min-h-24 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          name="description"
          placeholder="Short editorial summary"
        />
        {state.fieldErrors?.description ? (
          <span className="text-sm text-rose-600">{state.fieldErrors.description[0]}</span>
        ) : null}
      </label>
      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold text-slate-950">Content</span>
        <textarea
          className="min-h-52 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          name="content"
          placeholder="Write the full content body here."
        />
        {state.fieldErrors?.content ? (
          <span className="text-sm text-rose-600">{state.fieldErrors.content[0]}</span>
        ) : null}
      </label>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field error={state.fieldErrors?.seoTitle?.[0]} label="SEO title" name="seoTitle" placeholder="SEO title" />
        <Field error={state.fieldErrors?.seoDescription?.[0]} label="SEO description" name="seoDescription" placeholder="SEO description" />
      </div>
      <div className="mt-5 flex flex-wrap gap-4">
        <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
          <input className="size-4 accent-sky-600" name="featured" type="checkbox" />
          Featured
        </label>
        <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
          <input className="size-4 accent-sky-600" name="published" type="checkbox" />
          Published
        </label>
      </div>
      {state.message ? (
        <p
          className={`mt-5 text-sm ${state.ok ? "text-emerald-700" : "text-rose-600"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
      <button
        className="mt-6 inline-flex min-h-12 items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-slate-800 disabled:opacity-70"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Saving..." : `Save ${type}`}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  error,
}: {
  error?: string;
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <input
        aria-invalid={Boolean(error)}
        className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
        name={name}
        placeholder={placeholder}
      />
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}
