"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/site";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-slate-950/20 backdrop-blur-sm lg:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            animate={{ x: 0 }}
            className="absolute inset-x-3 top-3 overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-2xl shadow-slate-300/50"
            exit={{ x: 32, opacity: 0 }}
            initial={{ x: 32, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Link
                aria-label="Beyond The Scripts home"
                className="text-base font-semibold tracking-tight text-slate-950"
                href="/"
                onClick={onClose}
              >
                Beyond The Scripts
              </Link>
              <button
                aria-label="Close navigation menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                onClick={onClose}
                type="button"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="grid gap-1 p-3">
              {navLinks.map(({ href, icon: Icon, label }) => {
                const active = pathname === href;

                return (
                  <Link
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      active
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                    href={href}
                    key={href}
                    onClick={onClose}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
