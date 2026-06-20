import type { Topic } from "@/lib/editorial-data";

export function TopicGrid({ topics }: { topics: Topic[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {topics.map(({ description, icon: Icon, label }) => (
        <article
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100/70"
          key={label}
        >
          <Icon aria-hidden="true" className="size-5 text-sky-600" />
          <h3 className="mt-4 text-base font-semibold text-slate-950">
            {label}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </article>
      ))}
    </div>
  );
}
