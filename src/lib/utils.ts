import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely, resolving conflicting utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with locale separators, used by the AnimatedCounter component. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
