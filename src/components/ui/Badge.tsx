import { cn } from "@/lib/utils";

const variants = {
  brand: "bg-brand-50 text-brand-700",
  accent: "bg-accent text-charcoal",
  neutral: "bg-neutral-100 text-neutral-700",
} as const;

export function Badge({
  children,
  variant = "brand",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
