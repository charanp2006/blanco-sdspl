export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;
export const SMOOTH = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

export const STAGGER = {
  tight: 0.08,
  base: 0.12,
  loose: 0.18,
} as const;

export const pageTransitionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const pageTransition = { duration: DURATION.slow, ease: EASE_OUT };
