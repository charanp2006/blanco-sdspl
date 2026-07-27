import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { CompanyStat } from "@/types";

export function StatCounterSection({ stats }: { stats: CompanyStat[] }) {
  return (
    <section className="section-spacing bg-brand text-center text-white">
      <div className="container-page grid grid-cols-3 items-center justify-items-center gap-8">
        {stats.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} light />
        ))}
      </div>
    </section>
  );
}
