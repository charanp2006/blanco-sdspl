"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { primaryNav } from "@/constants/nav";
import { images } from "@/constants/images";
import { brand } from "@/constants/brand";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={brand.name}>
          <Image src={images.brand.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
          <span className="font-display text-lg font-bold text-charcoal">{brand.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold text-charcoal hover:text-brand"
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
              </Link>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full grid w-80 gap-1 rounded-card border border-neutral-100 bg-white p-3 shadow-card-hover"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-md px-3 py-2.5 hover:bg-brand-50"
                      >
                        <span className="block text-sm font-semibold text-charcoal">{child.label}</span>
                        {child.description && (
                          <span className="block text-xs text-neutral-500">{child.description}</span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-charcoal lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
