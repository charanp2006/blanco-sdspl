"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export function Tabs({ tabs, defaultIndex = 0 }: { tabs: TabItem[]; defaultIndex?: number }) {
  const [active, setActive] = useState(defaultIndex);
  const baseId = useId();

  return (
    <div>
      <div role="tablist" className="flex gap-2 border-b border-neutral-200">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${baseId}-panel-${index}`}
            onClick={() => setActive(index)}
            className={cn(
              "relative px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              active === index ? "text-brand" : "text-neutral-500 hover:text-charcoal",
            )}
          >
            {tab.label}
            {active === index && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" aria-hidden />
            )}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={active !== index}
          className="pt-6"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
