import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <RevealOnScroll className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="font-oswald text-xs font-medium uppercase tracking-widest text-brand">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-h2 text-charcoal">{title}</h2>
      {description && <p className="mt-3 text-neutral-600">{description}</p>}
    </RevealOnScroll>
  );
}
