"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import type { EditorialItem } from "@/lib/editorial-data";
import { CategoryBadge } from "@/components/CategoryBadge";

type ArticleCardProps = {
  item: EditorialItem;
  href?: string;
};

const accentStyles = {
  sky: "from-sky-100 via-white to-sky-50 text-sky-600",
  purple: "from-purple-100 via-white to-purple-50 text-purple-600",
  indigo: "from-indigo-100 via-white to-indigo-50 text-indigo-600",
  emerald: "from-emerald-100 via-white to-emerald-50 text-emerald-600",
  rose: "from-rose-100 via-white to-rose-50 text-rose-600",
};

export function ArticleCard({ href = "/", item }: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm shadow-slate-200/70"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${accentStyles[item.accent]} p-5`}>
        <div className="absolute inset-5 rounded-[1.35rem] border border-white/80 bg-white/30 shadow-inner transition-transform duration-300 group-hover:scale-[1.03]" />
        <div className="absolute right-5 top-5 grid size-11 place-items-center rounded-2xl bg-white/80 shadow-sm">
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </div>
        <p className="absolute bottom-16 left-5 max-w-[11rem] text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          {item.imageLabel ?? item.category}
        </p>
        <div className="absolute bottom-5 left-5 right-5">
          <CategoryBadge tone={item.accent}>{item.category}</CategoryBadge>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" className="size-3.5" />
            {item.readTime}
          </span>
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
          <Link
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            href={href}
          >
            {item.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {item.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">{item.author}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-950 transition group-hover:text-sky-700">
            Read more
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
