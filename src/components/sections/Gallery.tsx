"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/ui/Modal").then((m) => m.Modal), { ssr: false });

export function Gallery({ images, title = "Gallery" }: { images: string[]; title?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-card bg-neutral-100"
          >
            <Image
              src={src}
              alt={`${title} image ${index + 1}`}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Modal open={activeIndex !== null} onClose={() => setActiveIndex(null)} title={title}>
        {activeIndex !== null && images[activeIndex] && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image src={images[activeIndex]} alt={`${title} image ${activeIndex + 1}`} fill className="object-contain" />
          </div>
        )}
      </Modal>
    </>
  );
}
