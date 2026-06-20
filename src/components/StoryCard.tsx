"use client";

import { motion } from "framer-motion";
import type { EditorialItem } from "@/lib/editorial-data";
import { ArticleCard } from "@/components/ArticleCard";

export function StoryCard({ item }: { item: EditorialItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="h-full"
    >
      <ArticleCard href="/stories" item={item} />
    </motion.div>
  );
}
