"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="sticky top-0 z-50 h-1 w-full bg-transparent"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
