import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";

type EditorialPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  features: string[];
};

export function EditorialPage({
  eyebrow,
  features,
  intro,
  title,
}: EditorialPageProps) {
  return (
    <PageShell>
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow={eyebrow} title={title}>
            {intro}
          </SectionTitle>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/70"
                key={feature}
              >
                <span className="text-sm font-semibold text-sky-600">
                  0{index + 1}
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {feature}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Clear editorial structure, polished cards, and responsive
                  spacing keep this section ready for full article collections.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-950">
                  Read focus
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
