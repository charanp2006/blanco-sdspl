import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-neutral-200", className)} aria-hidden />;
}

export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-card border border-neutral-200">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-2 p-5">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
