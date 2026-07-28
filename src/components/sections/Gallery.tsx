"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/ui/Modal").then((m) => m.Modal), { ssr: false });

interface GalleryItem {
  src: string;
  title: string;
}

export function Gallery({ items, title = "Gallery" }: { items: GalleryItem[]; title?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-card bg-neutral-100"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-semibold text-white leading-tight">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      <Modal open={activeIndex !== null} onClose={() => setActiveIndex(null)} title={title}>
        {activeIndex !== null && items[activeIndex] && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image src={items[activeIndex].src} alt={items[activeIndex].title} fill className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10 text-center">
              <span className="text-sm font-semibold text-white">{items[activeIndex].title}</span>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
