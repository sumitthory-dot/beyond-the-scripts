import { BarChart3 } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <BarChart3 aria-hidden="true" className="size-6 text-sky-600" />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Analytics placeholders</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Reading history, bookmarks, subscribers, comments, and content
        publishing data can feed analytics when the database is connected.
      </p>
    </section>
  );
}
