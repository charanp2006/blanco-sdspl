"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface MarqueeImage {
  src: string;
  alt: string;
}

export function ImageMarquee({ images }: { images: MarqueeImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const speedRef = useRef(1);
  const targetSpeed = useRef(1);
  const rafRef = useRef<number>(0);
  const imagesRef = useRef(images);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const containerWidth = track.parentElement!.offsetWidth;
    const avgSlot = 280;
    const needed = Math.ceil((containerWidth * 2) / avgSlot);
    const copies = Math.ceil(needed / imagesRef.current.length);

    track.innerHTML = "";
    for (let c = 0; c < copies; c++) {
      for (const img of imagesRef.current) {
        const wrapper = document.createElement("div");
        wrapper.className = "relative flex-shrink-0 overflow-hidden rounded-card";

        const imgEl = document.createElement("img");
        imgEl.src = img.src;
        imgEl.alt = img.alt;
        imgEl.width = 320;
        imgEl.height = 220;
        imgEl.className =
          "h-56 w-auto rounded-card object-cover transition-transform duration-500 ease-out hover:scale-105";
        imgEl.draggable = false;

        const label = document.createElement("span");
        label.textContent = img.alt;
        label.className =
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 text-xs font-semibold text-white text-center opacity-0 transition-opacity duration-300";

        wrapper.appendChild(imgEl);
        wrapper.appendChild(label);

        wrapper.addEventListener("mouseenter", () => { label.style.opacity = "1"; });
        wrapper.addEventListener("mouseleave", () => { label.style.opacity = "0"; });

        track.appendChild(wrapper);
      }
    }

    const GAP = 48;
    let lastTime = 0;
    const baseSpeed = 40;

    const tick = (now: number) => {
      if (!lastTime) {
        lastTime = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = (now - lastTime) / 1000;
      lastTime = now;

      speedRef.current += (targetSpeed.current - speedRef.current) * Math.min(dt * 3, 1);
      posRef.current -= baseSpeed * speedRef.current * dt;

      const first = track.children[0] as HTMLElement | undefined;
      if (first) {
        const firstRight = first.getBoundingClientRect().right;
        const containerLeft = track.parentElement!.getBoundingClientRect().left;
        if (firstRight < containerLeft) {
          const slotWidth = first.offsetWidth + GAP;
          track.appendChild(first);
          posRef.current += slotWidth;
        }
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => { targetSpeed.current = 0; }}
      onMouseLeave={() => { targetSpeed.current = 1; }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

      <div
        ref={trackRef}
        className="flex items-center gap-12 w-max will-change-transform"
      />
    </div>
  );
}
