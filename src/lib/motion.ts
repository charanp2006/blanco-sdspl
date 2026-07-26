export const EASE_OUT = [0.16, 1, 0.3, 1] as const; // smooth, professional "ease-out-expo"-ish curve
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.15,
} as const;

/** Page-level enter transition, used by src/app/template.tsx. */
export const pageTransitionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const pageTransition = { duration: DURATION.base, ease: EASE_OUT };
