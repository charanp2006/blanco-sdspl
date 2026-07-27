"use client";

import { useEffect, useRef } from "react";

export function LogoMarquee({ logos }: { logos: { name: string; src: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const speedRef = useRef(1);
  const targetSpeed = useRef(1);
  const rafRef = useRef<number>(0);
  const logosRef = useRef(logos);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const containerWidth = track.parentElement!.offsetWidth;
    const avgSlot = 260;
    const needed = Math.ceil((containerWidth * 2) / avgSlot);
    const copies = Math.ceil(needed / logosRef.current.length);

    track.innerHTML = "";
    for (let c = 0; c < copies; c++) {
      for (const logo of logosRef.current) {
        const wrapper = document.createElement("div");
        wrapper.className = "relative flex flex-col items-center flex-shrink-0 cursor-pointer gap-3";

        const img = document.createElement("img");
        img.src = logo.src;
        img.alt = logo.name;
        img.width = 160;
        img.height = 74;
        img.className =
          "h-24 w-auto object-contain transition-transform duration-500 ease-out hover:scale-110";
        img.draggable = false;

        const name = document.createElement("span");
        name.textContent = logo.name;
        name.className =
          "font-oswald text-[13px] font-medium uppercase tracking-wider text-neutral-500 text-center leading-tight";

        wrapper.appendChild(img);
        wrapper.appendChild(name);
        track.appendChild(wrapper);
      }
    }

    const GAP = 64;
    let lastTime = 0;
    const baseSpeed = 50;

    const tick = (now: number) => {
      if (!lastTime) {
        lastTime = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = (now - lastTime) / 1000;
      lastTime = now;

      speedRef.current +=
        (targetSpeed.current - speedRef.current) * Math.min(dt * 3, 1);
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

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleContainerEnter = () => {
    targetSpeed.current = 0;
  };
  const handleContainerLeave = () => {
    targetSpeed.current = 1;
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleContainerEnter}
      onMouseLeave={handleContainerLeave}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-neutral-50 to-transparent" />

      <div
        ref={trackRef}
        className="flex items-center gap-16 w-max will-change-transform"
      />
    </div>
  );
}
