import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hoverable = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-neutral-200 bg-white shadow-soft transition-all duration-300",
        hoverable && "hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
