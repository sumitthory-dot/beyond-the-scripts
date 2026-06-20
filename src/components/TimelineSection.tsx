"use client";

import { motion } from "framer-motion";
import { aboutTimeline } from "@/lib/editorial-data";
import { SectionTitle } from "@/components/SectionTitle";

export function TimelineSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Timeline" title="How the publication is growing">
          The foundation is built around durable editorial lanes that can expand
          without losing focus.
        </SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutTimeline.map((item, index) => (
            <motion.article
              className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/70"
              initial={{ opacity: 0, y: 18 }}
              key={item.year}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm font-semibold text-sky-600">
                {item.year}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
