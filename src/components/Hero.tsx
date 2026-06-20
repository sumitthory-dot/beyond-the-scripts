"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, BookOpen, Layers3, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { siteConfig } from "@/lib/site";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
        className="absolute left-[7%] top-24 -z-10 size-24 rounded-[2rem] border border-sky-100 bg-white/70 shadow-xl shadow-sky-100/70"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -5, 0] }}
        className="absolute right-[10%] top-36 -z-10 size-20 rounded-full bg-purple-100/80 shadow-xl shadow-purple-100/80"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        className="absolute bottom-14 right-[22%] -z-10 h-14 w-28 rounded-full border border-indigo-100 bg-white/75 shadow-lg shadow-indigo-100/80"
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-28">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          variants={container}
          viewport={{ once: true, amount: 0.4 }}
          whileInView="show"
        >
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100"
            variants={item}
          >
            <Sparkles aria-hidden="true" className="size-4 text-sky-500" />
            Ideas beyond the obvious playbook
          </motion.div>
          <motion.h1
            className="text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl"
            variants={item}
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl"
            variants={item}
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={item}
          >
            <AnimatedButton href="/stories">Explore Articles</AnimatedButton>
            <AnimatedButton href="/stories" variant="secondary">
              Read Stories
            </AnimatedButton>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative mx-auto w-full max-w-xl"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-2xl shadow-slate-200/80 backdrop-blur">
            <div className="overflow-hidden rounded-[1.45rem] border border-slate-100 bg-slate-950">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
                <span className="size-3 rounded-full bg-rose-300" />
                <span className="size-3 rounded-full bg-amber-300" />
                <span className="size-3 rounded-full bg-emerald-300" />
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                {[
                  ["Stories", "Narratives that turn lessons into momentum."],
                  ["Startups", "Sharper thinking for founders and builders."],
                  ["AI Tools", "Practical workflows for modern creators."],
                ].map(([title, copy], index) => (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    initial={{ opacity: 0, x: 18 }}
                    key={title}
                    transition={{ delay: 0.35 + index * 0.13 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-xl bg-white text-slate-950">
                        {index === 0 ? (
                          <BookOpen aria-hidden="true" className="size-4" />
                        ) : index === 1 ? (
                          <Layers3 aria-hidden="true" className="size-4" />
                        ) : (
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        )}
                      </span>
                      <div>
                        <h2 className="text-sm font-semibold text-white">
                          {title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {copy}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
