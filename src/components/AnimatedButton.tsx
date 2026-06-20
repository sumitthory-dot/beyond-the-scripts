"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: AnimatedButtonProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white shadow-lg shadow-sky-200/80 hover:bg-slate-800"
      : "border border-slate-200 bg-white/85 text-slate-900 shadow-sm shadow-slate-200/70 hover:border-sky-200 hover:bg-sky-50";

  return (
    <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      <Link className={`${base} ${styles} ${className}`} href={href} {...props}>
        <span>{children}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </motion.div>
  );
}
