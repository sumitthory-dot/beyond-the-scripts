"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Lightbulb, Mail, Target } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { categoryLinks } from "@/lib/site";

const summaries = [
  "Human stories with useful takeaways for ambitious creators.",
  "Founder lessons, product thinking, and company-building clarity.",
  "Practical frameworks for smarter decisions and stronger operations.",
  "Audience growth, ethical monetization, and sustainable partnerships.",
  "AI reviews, workflows, and comparisons that save real time.",
];

export function HomeSections() {
  return (
    <>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Foundation"
            title="A publication system built for useful depth."
          >
            Start with focused categories, then expand into stories, guides,
            reviews, and resources without changing the core experience.
          </SectionTitle>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categoryLinks.map(({ href, icon: Icon, label }, index) => (
              <motion.a
                className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/60 transition hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100/70"
                href={href}
                initial={{ opacity: 0, y: 18 }}
                key={href}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-950">
                  {label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {summaries[index]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">
                  Explore
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Editorial promise"
            title="Designed for readers who build, test, and ship."
          >
            Every part of the foundation is ready for real routes, article
            collections, newsletter integration, and richer editorial pages.
          </SectionTitle>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Readable by default",
                copy: "Calm typography, generous spacing, and layouts that make long-form content feel inviting.",
              },
              {
                icon: Target,
                title: "Action focused",
                copy: "Clear links and calls to action guide readers to categories, stories, and contact.",
              },
              {
                icon: Lightbulb,
                title: "Future ready",
                copy: "Reusable components keep the site easy to extend in the next phases.",
              },
              {
                icon: Mail,
                title: "Audience first",
                copy: "The system is prepared for newsletter capture and community touchpoints.",
              },
            ].map(({ copy, icon: Icon, title }, index) => (
              <motion.div
                className="rounded-3xl border border-white bg-white p-6 shadow-sm shadow-slate-200/70"
                initial={{ opacity: 0, y: 18 }}
                key={title}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Icon aria-hidden="true" className="size-5 text-purple-500" />
                <h3 className="mt-4 text-base font-semibold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
