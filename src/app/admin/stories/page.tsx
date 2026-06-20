import { ContentEditorForm } from "@/components/admin/ContentEditorForm";

export default function AdminStoriesPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
        Stories
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        Story publishing system
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
        Prepare story chapters, series, author metadata, cover images, tags,
        reading time, featured status, publish status, and SEO metadata.
      </p>
      <div className="mt-8">
        <ContentEditorForm type="story" />
      </div>
    </section>
  );
}
