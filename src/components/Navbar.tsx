"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255,255,255,0.86)"
            : "rgba(255,255,255,0.72)",
          boxShadow: isScrolled
            ? "0 18px 45px rgba(15, 23, 42, 0.08)"
            : "0 0 0 rgba(15, 23, 42, 0)",
        }}
        className="sticky top-0 z-40 border-b border-white/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            aria-label="Beyond The Scripts home"
            className="group flex min-w-0 items-center gap-3 rounded-full pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            href="/"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 text-white shadow-lg shadow-sky-200">
              <Sparkles aria-hidden="true" className="size-5" />
            </span>
            <span className="truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
              Beyond The Scripts
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;

              return (
                <Link
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 xl:px-4 ${
                    active
                      ? "text-sky-700"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-950"
                  }`}
                  href={href}
                  key={href}
                >
                  {active ? (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-sky-50"
                      layoutId="active-nav-link"
                      transition={{ duration: 0.2 }}
                    />
                  ) : null}
                  <span className="relative">{label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </motion.header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
