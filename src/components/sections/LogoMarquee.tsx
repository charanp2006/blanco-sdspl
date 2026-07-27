"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    const avgSlot = 224; // ~160px logo + 64px gap
    const needed = Math.ceil((containerWidth * 2) / avgSlot);
    const copies = Math.ceil(needed / logosRef.current.length);

    // Build DOM with enough copies to fill the track
    track.innerHTML = "";
    for (let c = 0; c < copies; c++) {
      for (const logo of logosRef.current) {
        const wrapper = document.createElement("div");
        wrapper.className = "relative flex-shrink-0 cursor-pointer";
        wrapper.setAttribute("data-tooltip", logo.name);

        const img = document.createElement("img");
        img.src = logo.src;
        img.alt = logo.name;
        img.width = 160;
        img.height = 74;
        img.className =
          "h-24 w-auto object-contain transition-transform duration-500 ease-out hover:scale-110";
        img.draggable = false;
        wrapper.appendChild(img);
        track.appendChild(wrapper);
      }
    }

    // Tooltip element
    const tip = document.createElement("div");
    tip.className =
      "pointer-events-none absolute z-20 whitespace-nowrap rounded-lg bg-charcoal px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg opacity-0 transition-opacity duration-200";
    tip.style.transform = "translate(-50%, -100%)";
    tip.style.marginTop = "-10px";
    track.parentElement!.appendChild(tip);

    const showTip = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-tooltip]");
      if (!target) return;
      tip.textContent = target.getAttribute("data-tooltip");
      tip.style.opacity = "1";
      const rect = target.getBoundingClientRect();
      const containerRect = track.parentElement!.getBoundingClientRect();
      tip.style.left = `${rect.left + rect.width / 2 - containerRect.left}px`;
      tip.style.top = `${rect.top - containerRect.top}px`;
    };

    const hideTip = () => { tip.style.opacity = "0"; };

    track.addEventListener("mouseover", showTip);
    track.addEventListener("mouseout", hideTip);

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

      // Recycle: move first child to end when it scrolls fully off left
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
      track.removeEventListener("mouseover", showTip);
      track.removeEventListener("mouseout", hideTip);
      tip.remove();
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
