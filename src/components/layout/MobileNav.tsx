"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { primaryNav } from "@/constants/nav";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const panelVariants = {
  hidden: { x: "100%", opacity: 0.5 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const navItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.04, duration: 0.35, ease: "easeOut" },
  }),
};

const childVariants = {
  hidden: { x: 10, opacity: 0, height: 0 },
  visible: {
    x: 0,
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    x: 10,
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    panel?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-charcoal/50 lg:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            key="panel"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 focus:outline-none lg:hidden"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
          >
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-charcoal hover:bg-neutral-100 transition-colors"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </motion.div>

            <nav className="mt-6 flex flex-col gap-1">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center justify-between border-b border-neutral-100">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex-1 py-3.5 text-base font-semibold text-charcoal hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-expanded={expanded === item.label}
                        className="p-3 text-charcoal hover:text-brand transition-colors"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            expanded === item.label && "rotate-180"
                          )}
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && expanded === item.label && (
                      <motion.div
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="ml-3 flex flex-col gap-1 border-l-2 border-brand/30 pl-3 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="py-2 text-sm text-neutral-600 hover:text-brand transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
