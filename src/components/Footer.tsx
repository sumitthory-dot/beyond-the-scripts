import Link from "next/link";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { categoryLinks, navLinks, siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr] lg:px-8">
        <div>
          <Link
            aria-label="Beyond The Scripts home"
            className="inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            href="/"
          >
            <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 text-white shadow-lg shadow-sky-100">
              <Sparkles aria-hidden="true" className="size-5" />
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-950">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
            {siteConfig.description}
          </p>
        </div>

        <FooterGroup title="Quick links">
          {navLinks.slice(0, 4).map(({ href, label }) => (
            <FooterLink href={href} key={href}>
              {label}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title="Categories">
          {categoryLinks.map(({ href, label }) => (
            <FooterLink href={href} key={href}>
              {label}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title="Social">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              href={href}
              key={label}
            >
              <Icon aria-hidden="true" className="size-4" />
              {label}
            </Link>
          ))}
        </FooterGroup>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            Copyright {new Date().getFullYear()} Beyond The Scripts. All rights
            reserved.
          </p>
          <p>Built for thoughtful creators and entrepreneurs.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      className="text-sm text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      href={href}
    >
      {children}
    </Link>
  );
}
