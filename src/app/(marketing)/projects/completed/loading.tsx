import { CardSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="container-page section-spacing">
      <div className="h-8 w-64 animate-pulse rounded-md bg-neutral-200" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
