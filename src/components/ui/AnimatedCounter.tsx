"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { formatNumber } from "@/lib/utils";

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  /** Use on dark/brand-colored backgrounds. */
  light?: boolean;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { ref, value: animated } = useCountUp(value);
  const current = reduceMotion ? value : animated;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className={`text-4xl font-bold md:text-5xl ${light ? "text-white" : "text-brand"}`}>
        {formatNumber(current)}
        {suffix}
      </div>
      <div
        className={`mt-2 text-sm font-medium uppercase tracking-wide ${light ? "text-white/70" : "text-neutral-500"}`}
      >
        {label}
      </div>
    </div>
  );
}
