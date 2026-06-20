type CategoryBadgeProps = {
  children: string;
  tone?: "sky" | "purple" | "indigo" | "emerald" | "rose";
};

const toneStyles = {
  sky: "border-sky-100 bg-sky-50 text-sky-700",
  purple: "border-purple-100 bg-purple-50 text-purple-700",
  indigo: "border-indigo-100 bg-indigo-50 text-indigo-700",
  emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
  rose: "border-rose-100 bg-rose-50 text-rose-700",
};

export function CategoryBadge({ children, tone = "sky" }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
