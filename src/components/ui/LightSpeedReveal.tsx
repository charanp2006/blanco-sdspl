"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DURATION, EASE_OUT } from "@/lib/motion";

const lightspeedVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    skewX: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_OUT,
    },
  },
};

const lightspeedRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    skewX: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_OUT,
    },
  },
};

const staticVariants: Variants = {
  hidden: { opacity: 1, x: 0, skewX: 0 },
  visible: { opacity: 1, x: 0, skewX: 0 },
};

export function LightSpeedReveal({
  children,
  delay = 0,
  from = "left",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right";
  className?: string;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const selectedVariants = from === "left" ? lightspeedVariants : lightspeedRightVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={reduceMotion ? staticVariants : selectedVariants}
      transition={reduceMotion ? { duration: 1.5 } : { delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
