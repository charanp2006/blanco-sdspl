import { cn } from "@/lib/utils";

/**
 * Compact hero for inner pages (About, Careers, Blog, Contact, etc).
 * Deliberately a server component: the subtle fade-up uses a CSS keyframe
 * (see tailwind.config.ts) instead of Framer Motion, so the ~8 pages using
 * this hero don't pay for client-side motion JS just for one fade-in.
 */
export function InnerPageHero({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-neutral-100 bg-neutral-50", className)}>
      <div className="container-page py-16 md:py-20">
        <h1 className="animate-fade-in-up font-display text-h1 text-charcoal">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl animate-fade-in-up-delay text-neutral-600">{description}</p>
        )}
      </div>
    </section>
  );
}
