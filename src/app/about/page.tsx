import { CommunitySection } from "@/components/CommunitySection";
import { FeedbackForm } from "@/components/FeedbackForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineSection } from "@/components/TimelineSection";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { values } from "@/lib/editorial-data";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A publication for thoughtful creators and entrepreneurs."
        description="Beyond The Scripts helps ambitious people turn stories, systems, business thinking, affiliate trust, and AI workflows into meaningful progress."
        stat={{ value: "5 lanes", label: "Stories, startups, business, affiliate marketing, and AI tools." }}
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              copy: "Publish useful, beautifully structured ideas that help creators and entrepreneurs build with more clarity.",
            },
            {
              title: "Vision",
              copy: "Become a calm operating library for people turning insight, technology, and audience trust into durable work.",
            },
            {
              title: "Why Beyond The Scripts?",
              copy: "Because the best builders learn the playbook, then adapt it with taste, context, and courage.",
            },
          ].map((item) => (
            <article
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-200/70"
              key={item.title}
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Values" title="Our values">
            The site is designed around clarity, trust, craft, and community.
          </SectionTitle>
          <div className="mt-10">
            <TopicGrid topics={values} />
          </div>
        </div>
      </section>

      <TimelineSection />
      <CommunitySection />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle eyebrow="Feedback" title="Help shape the publication">
            Share what would make the stories, guides, and community more useful
            as Beyond The Scripts grows.
          </SectionTitle>
          <FeedbackForm />
        </div>
      </section>
    </PageShell>
  );
}
