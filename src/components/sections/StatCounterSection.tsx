import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { CompanyStat } from "@/types";

export function StatCounterSection({ stats }: { stats: CompanyStat[] }) {
  return (
    <section className="section-spacing bg-brand text-white">
      <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} light />
        ))}
      </div>
    </section>
  );
}
