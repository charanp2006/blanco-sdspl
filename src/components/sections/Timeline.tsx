"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export interface TimelineEntry {
  year: string;
  label: string;
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-neutral-200" aria-hidden />
      <ol className="space-y-8">
        {entries.map((entry, index) => (
          <motion.li
            key={entry.year}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: EASE_OUT }}
            className="relative"
          >
            <span className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-brand bg-white" aria-hidden />
            <p className="font-mono text-sm font-semibold text-brand">{entry.year}</p>
            <p className="mt-1 text-charcoal">{entry.label}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
