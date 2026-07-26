"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { pageTransition, pageTransitionVariants } from "@/lib/motion";

/**
 * Runs on every route change (unlike layout.tsx, which persists).
 * Provides the "soft fade/slide" page transition called for in Phase 1 §12.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageTransitionVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
