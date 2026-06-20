import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Start a thoughtful conversation."
        description="Reach out for collaborations, story ideas, AI tool reviews, affiliate partnerships, or community conversations."
        stat={{ value: "24-48h", label: "A realistic response window for thoughtful notes and collaboration requests." }}
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle
            eyebrow="Message"
            title="Tell us what you are building."
          >
            The form is prepared for future backend integration with validation,
            accessible error states, and a clean success state.
          </SectionTitle>

          <ContactForm />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: Mail, title: "Email", copy: "hello@beyondthescripts.com" },
            { icon: MessageSquare, title: "Story ideas", copy: "Send sharp lessons, founder notes, or tool experiences." },
            { icon: Sparkles, title: "Partnerships", copy: "Pitch useful collaborations that respect reader trust." },
          ].map(({ copy, icon: Icon, title }) => (
            <article
              className="rounded-3xl border border-white bg-white p-6 shadow-sm shadow-slate-200/70"
              key={title}
            >
              <Icon aria-hidden="true" className="size-5 text-sky-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-950">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
