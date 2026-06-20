import { SkeletonCard } from "@/components/SkeletonCard";

export function LoadingState({
  count = 3,
  label = "Loading content",
}: {
  count?: number;
  label?: string;
}) {
  return (
    <div
      aria-label={label}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      role="status"
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
