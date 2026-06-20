import { MessageSquare } from "lucide-react";

export default function AdminCommentsPage() {
  return <AdminPlaceholder icon={MessageSquare} title="Comments management" />;
}

function AdminPlaceholder({
  icon: Icon,
  title,
}: {
  icon: typeof MessageSquare;
  title: string;
}) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <Icon aria-hidden="true" className="size-6 text-sky-600" />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Protected admin architecture is ready for Supabase queries, moderation,
        filtering, and bulk actions.
      </p>
    </section>
  );
}
