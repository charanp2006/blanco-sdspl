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
        "rounded-card border border-neutral-200 bg-white shadow-soft transition-all duration-500 ease-out",
        hoverable && "hover:-translate-y-1.5 hover:shadow-card-hover hover:border-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
