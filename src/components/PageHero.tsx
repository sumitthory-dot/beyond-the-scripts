"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  stat?: { value: string; label: string };
};

export function PageHero({
  children,
  description,
  eyebrow,
  stat,
  title,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        className="absolute left-[8%] top-16 -z-10 size-16 rounded-3xl border border-sky-100 bg-white/75 shadow-xl shadow-sky-100"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
        className="absolute bottom-16 right-[10%] -z-10 h-14 w-28 rounded-full border border-purple-100 bg-white/75 shadow-xl shadow-purple-100"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-sky-100">
            <Sparkles aria-hidden="true" className="size-4 text-sky-500" />
            {eyebrow}
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            {description}
          </p>
          {children ? <div className="mt-9">{children}</div> : null}
        </motion.div>

        {stat ? (
          <motion.div
            className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-slate-200/80 backdrop-blur"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <p className="text-5xl font-semibold tracking-tight text-slate-950">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {stat.label}
            </p>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
