"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, UserRound } from "lucide-react";
import type { EditorialItem } from "@/lib/editorial-data";
import { CategoryBadge } from "@/components/CategoryBadge";

const heroImageStyles = {
  sky: "from-sky-100 via-white to-indigo-100",
  purple: "from-purple-100 via-white to-sky-100",
  indigo: "from-indigo-100 via-white to-purple-100",
  emerald: "from-emerald-100 via-white to-sky-100",
  rose: "from-rose-100 via-white to-purple-100",
};

export function FeaturedStory({ story }: { story: EditorialItem }) {
  return (
    <motion.article
      className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/80 lg:grid-cols-[0.95fr_1.05fr]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`relative min-h-80 bg-gradient-to-br ${heroImageStyles[story.accent]} p-8`}
      >
        <div className="absolute inset-8 rounded-[1.5rem] border border-white/80 bg-white/30 shadow-inner" />
        <div className="relative flex h-full min-h-64 flex-col justify-between">
          <CategoryBadge tone={story.accent}>{story.category}</CategoryBadge>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured story
            </p>
            <p className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-slate-950">
              {story.imageLabel ?? "editorial feature"}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-4" />
            {story.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" className="size-4" />
            {story.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UserRound aria-hidden="true" className="size-4" />
            {story.author}
          </span>
        </div>
        <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {story.title}
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          {story.description}
        </p>
        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
          href="/stories"
        >
          Read story
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </motion.article>
  );
}
