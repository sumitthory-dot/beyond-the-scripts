import { BarChart3, Mail, MessageSquare, Newspaper } from "lucide-react";

export default function AdminPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
        Dashboard
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        Platform overview
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Newspaper, label: "Published content", value: "CMS ready" },
          { icon: MessageSquare, label: "Comments", value: "Moderation ready" },
          { icon: Mail, label: "Subscribers", value: "Database ready" },
          { icon: BarChart3, label: "Analytics", value: "Placeholder" },
        ].map(({ icon: Icon, label, value }) => (
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/70" key={label}>
            <Icon aria-hidden="true" className="size-5 text-sky-600" />
            <p className="mt-5 text-2xl font-semibold text-slate-950">{value}</p>
            <p className="mt-2 text-sm text-slate-600">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
