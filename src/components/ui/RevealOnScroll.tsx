"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DURATION, EASE_OUT, STAGGER } from "@/lib/motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={reduceMotion ? staticVariants : variants}
      transition={reduceMotion ? { duration: 0 } : { duration: DURATION.base, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a list of children and staggers their reveal. */
export function StaggerReveal({
  children,
  className,
  stagger = STAGGER.base,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: reduceMotion ? 0 : stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? staticVariants : variants}
      transition={reduceMotion ? { duration: 0 } : { duration: DURATION.base, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
