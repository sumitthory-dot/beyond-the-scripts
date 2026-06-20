"use client";

import { motion } from "framer-motion";
import type { EditorialItem } from "@/lib/editorial-data";
import { StoryCard } from "@/components/StoryCard";
import { SectionTitle } from "@/components/SectionTitle";

export function RelatedStories({ stories }: { stories: EditorialItem[] }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Related" title="Related stories">
          More field notes and thoughtful essays from the same editorial orbit.
        </SectionTitle>
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stories.map((story) => (
            <StoryCard item={story} key={story.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
