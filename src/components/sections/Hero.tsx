"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
}

/** Full-bleed hero for the homepage. */
export function HomeHero({ eyebrow, title, description, primaryCta, secondaryCta, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        </div>
      )}
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
        <motion.h1 variants={item} className="mt-4 max-w-3xl font-display text-display text-white">
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
            <motion.p variants={item} className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 variants={item} className="mt-3 font-display text-h1 text-charcoal">
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
