"use client";

import { motion } from "framer-motion";
import { communitySignals } from "@/lib/editorial-data";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedButton } from "@/components/AnimatedButton";

export function CommunitySection() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          align="center"
          eyebrow="Community"
          title="A place for builders to compare notes"
        >
          The community layer is designed for conversations around launches,
          tools, strategy, and the quieter decisions behind meaningful work.
        </SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communitySignals.map(({ description, icon: Icon, label }, index) => (
            <motion.article
              className="rounded-3xl border border-white bg-white p-6 shadow-sm shadow-slate-200/70"
              initial={{ opacity: 0, y: 18 }}
              key={label}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Icon aria-hidden="true" className="size-5 text-purple-500" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">
                {label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-slate-200/70 md:grid-cols-3">
          <div className="rounded-3xl bg-sky-50 p-5">
            <p className="text-3xl font-semibold text-slate-950">12k+</p>
            <p className="mt-2 text-sm text-slate-600">Reader count placeholder for the future community backend.</p>
          </div>
          <div className="rounded-3xl bg-purple-50 p-5">
            <p className="text-3xl font-semibold text-slate-950">Weekly</p>
            <p className="mt-2 text-sm text-slate-600">Latest updates placeholder for editorial and product notes.</p>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-sm leading-6 text-slate-300">Join the community CTA with room for future auth or newsletter handoff.</p>
            <div className="mt-5">
              <AnimatedButton href="/contact" variant="secondary">
                Join community
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
