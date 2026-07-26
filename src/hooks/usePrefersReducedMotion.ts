"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

/** True if the user's OS/browser requests reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
