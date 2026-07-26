"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </div>
  );
}
