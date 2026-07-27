import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";

export function ProcessSteps({ steps }: { steps: { step: string; description: string }[] }) {
  return (
    <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, index) => (
        <StaggerItem key={s.step} className="relative rounded-card border border-neutral-200 p-6">
          <span className="font-oswald text-sm font-medium text-brand-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-base font-semibold text-charcoal">{s.step}</h3>
          <p className="mt-2 text-sm text-neutral-600">{s.description}</p>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
