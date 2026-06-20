"use client";

import { useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { SearchBar } from "@/components/SearchBar";

export function SearchExperience({
  suggestions,
}: {
  suggestions: string[];
}) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return suggestions.slice(0, 4);
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(normalized),
    );
  }, [query, suggestions]);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/70">
      <SearchBar
        onChange={setQuery}
        placeholder="Search this content lane"
        suggestions={suggestions.slice(0, 5)}
        value={query}
      />
      <div className="mt-5">
        {matches.length > 0 ? (
          <div className="grid gap-2">
            {matches.map((match) => (
              <div
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                key={match}
              >
                {match}
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            message="This UI is ready for future article search indexing."
            title="No search results"
          />
        )}
      </div>
    </div>
  );
}
