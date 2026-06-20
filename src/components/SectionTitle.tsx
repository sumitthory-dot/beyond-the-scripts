import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div
      className={`mx-auto max-w-3xl ${
        centered ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
