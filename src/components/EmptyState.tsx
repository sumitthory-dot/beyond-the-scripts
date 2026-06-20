import { Inbox, SearchX } from "lucide-react";

export function EmptyState({
  message = "No matching results yet.",
  title = "Nothing found",
  variant = "search",
}: {
  title?: string;
  message?: string;
  variant?: "search" | "comments" | "articles";
}) {
  const Icon = variant === "search" ? SearchX : Inbox;

  return (
    <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
      <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-slate-500 shadow-sm">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
        {message}
      </p>
    </div>
  );
}
