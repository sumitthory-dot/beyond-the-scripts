"use client";

import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { PageHero } from "@/components/PageHero";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { StoryCard } from "@/components/StoryCard";
import { CommentSection } from "@/components/CommentSection";
import { FeaturedStory } from "@/components/FeaturedStory";
import { Newsletter } from "@/components/Newsletter";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RelatedStories } from "@/components/RelatedStories";
import { stories } from "@/lib/editorial-data";

const filters = ["All", "Founder Story", "Creator Notes", "AI Work", "Audience", "Business"];

export function StoriesPageContent() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return stories.filter((story) => {
      const matchesFilter =
        activeFilter === "All" || story.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [story.title, story.description, story.category, story.author]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const [featured, ...latest] = filteredStories;

  return (
    <>
      <ReadingProgressBar />
      <PageHero
        eyebrow="Stories"
        title="Human stories for people building beyond the script."
        description="Narratives about creators, founders, product choices, AI workflows, and the quieter lessons behind meaningful work."
        stat={{ value: "5 lanes", label: "Founder stories, creator notes, business lessons, AI work, and audience building." }}
      >
        <div className="max-w-2xl">
          <SearchBar
            onChange={setQuery}
            suggestions={filters.slice(1)}
            value={query}
          />
        </div>
      </PageHero>

      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Filter aria-hidden="true" className="size-4 text-sky-600" />
              Filters
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    activeFilter === filter
                      ? "border-sky-200 bg-sky-50 text-sky-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured" title="Featured story">
            A carefully selected narrative from the current editorial desk.
          </SectionTitle>
          <div className="mt-10">
            {featured ? (
              <FeaturedStory story={featured} />
            ) : (
              <EmptyState
                title="No featured story found"
                message="Try a different search or filter to bring stories back into view."
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Latest" title="Latest stories">
            Fresh essays and field notes for thoughtful builders.
          </SectionTitle>
          {latest.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {latest.map((story) => (
                <StoryCard item={story} key={story.title} />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState message="The current search has no latest stories. Clear the search or choose All filters." />
            </div>
          )}
        </div>
      </section>
      <RelatedStories stories={stories.slice(1, 4)} />
      <CommentSection />
      <Newsletter />
    </>
  );
}
