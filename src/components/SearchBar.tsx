"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suggestions?: string[];
  onSuggestionSelect?: (value: string) => void;
};

export function SearchBar({
  onChange,
  onSuggestionSelect,
  placeholder = "Search stories, topics, or categories",
  suggestions = [],
  value,
}: SearchBarProps) {
  return (
    <div className="grid gap-3">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
        />
        <motion.input
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="search"
          value={value}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.18 }}
        />
      </label>
      {suggestions.length > 0 ? (
        <div
          aria-label="Search suggestions"
          className="flex flex-wrap gap-2"
          role="list"
        >
          {suggestions.map((suggestion) => (
            <button
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              key={suggestion}
              onClick={() => {
                onChange(suggestion);
                onSuggestionSelect?.(suggestion);
              }}
              type="button"
            >
              {suggestion}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
