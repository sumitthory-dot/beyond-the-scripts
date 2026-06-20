export function SkeletonCard() {
  return (
    <div
      aria-label="Loading card"
      className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm shadow-slate-200/70"
      role="status"
    >
      <div className="h-40 animate-pulse bg-slate-100" />
      <div className="grid gap-4 p-6">
        <div className="h-4 w-24 animate-pulse rounded-full bg-slate-100" />
        <div className="h-6 w-4/5 animate-pulse rounded-full bg-slate-100" />
        <div className="h-4 w-full animate-pulse rounded-full bg-slate-100" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-100" />
      </div>
    </div>
  );
}
