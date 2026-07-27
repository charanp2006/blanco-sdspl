"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
];

const ZOOM_DURATION = 7000;

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, ZOOM_DURATION);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: ZOOM_DURATION / 1000, ease: "linear" },
          }}
        >
          <Image
            src={CAROUSEL_IMAGES[current]!}
            alt=""
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Previous image"
        >
          &lsaquo;
        </button>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Next image"
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
}

/** Full-bleed hero for the homepage. */
export function HomeHero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal h-[100vh] md:h-[90vh]">
      <ImageCarousel />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-page relative py-28 md:py-36"
      >
        {eyebrow && (
          <motion.p variants={item} className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </motion.p>
        )}
        <motion.h1 variants={item} className="mt-4 max-w-3xl text-display text-white">
          {title}
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg text-neutral-300">
          {description}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          {primaryCta && (
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal">
              {secondaryCta.label}
            </Button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Split hero used on Service pages: copy left, visual right. */
export function ServiceHero({ eyebrow, title, description, primaryCta, image }: HeroProps) {
  return (
    <section className="border-b border-neutral-100 bg-brand-50/40">
      <div className="container-page grid items-center gap-10 py-20 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="visible">
          {eyebrow && (
            <motion.p variants={item} className="font-oswald text-xs font-medium uppercase tracking-widest text-brand">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 variants={item} className="mt-3 text-h1 text-charcoal">
            {title}
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-neutral-600">
            {description}
          </motion.p>
          {primaryCta && (
            <motion.div variants={item} className="mt-7">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            </motion.div>
          )}
        </motion.div>
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-card"
          >
            <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
