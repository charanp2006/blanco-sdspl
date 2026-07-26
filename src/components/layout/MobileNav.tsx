"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { primaryNav } from "@/constants/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus trap + restore-on-close, matching the pattern used in Modal.
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
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 focus:outline-none lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
          >
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Close menu" className="rounded-md p-2 text-charcoal">
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex-1 py-3 font-display text-base font-semibold text-charcoal"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-expanded={expanded === item.label}
                        aria-label={`${expanded === item.label ? "Collapse" : "Expand"} ${item.label} submenu`}
                        className="p-3 text-charcoal"
                      >
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", expanded === item.label && "rotate-180")}
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>
                  {item.children && expanded === item.label && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="py-2 text-sm text-neutral-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <Button href="/contact" className="mt-6 w-full" onClick={onClose}>
              Request a Quote
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
