import { ContentEditorForm } from "@/components/admin/ContentEditorForm";

export default function AdminArticlesPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
        Articles
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        Article publishing system
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
        Manage business, startup, affiliate marketing, and AI Tools articles
        with validation, SEO fields, tags, feature status, and publish status.
      </p>
      <div className="mt-8">
        <ContentEditorForm type="article" />
      </div>
    </section>
  );
}
