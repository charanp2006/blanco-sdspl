"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Search } from "lucide-react";
import { primaryNav } from "@/constants/nav";
import { images } from "@/constants/images";
import { brand } from "@/constants/brand";
import { MobileNav } from "@/components/layout/MobileNav";

function NavLink({ item, isActive }: { item: typeof primaryNav[number]; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className="relative flex items-center gap-1 rounded-md px-4 py-2 tracking-widest uppercase font-oswald text-charcoal hover:text-brand"
      aria-haspopup={item.children ? "true" : undefined}
    >
      {item.label}
      {item.children && <ChevronDown className="h-4.5 w-4" aria-hidden />}
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-brand"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isNavActive = (item: typeof primaryNav[number]) => {
    if (item.href === pathname) return true;
    if (item.children) {
      return item.children.some((child) => pathname.startsWith(child.href));
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white backdrop-blur">
      <div className="flex h-20 items-center justify-between width-full max-w-[1280px] px-4 py-2 mx-auto">
        <Link href="/" className="flex items-center gap-2" aria-label={brand.name}>
          <Image src={images.brand.logo} alt="Blanco Logo" width={480} height={480} className="h-12 w-auto object-contain rounded-[50%] p-[1.5px] bg-[#3e4095]" />
          <div className="flex flex-col leading-none ">
            <span className="font-montserrat text-xl font-black leading-tight tracking-[0.01em]">{brand.brandName}</span>
            <span className="font-oswald text-[11px] font-extrabold text-[#3e4095] tracking-[0.09em] uppercase">{brand.service}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <NavLink item={item} isActive={isNavActive(item)} />

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full grid w-80 gap-1 rounded-card border border-neutral-100 bg-white p-3 shadow-card-hover"
                  >
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`rounded-md px-3 py-2.5 hover:bg-brand-50 font-outfit ${childActive ? "bg-brand-50" : ""}`}
                        >
                          <span className={`block text-sm font-semibold ${childActive ? "text-brand" : "text-charcoal"}`}>{child.label}</span>
                          {child.description && (
                            <span className="block text-xs text-neutral-500">{child.description}</span>
                          )}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-56 rounded-pill tracking-wide border border-neutral-600 bg-neutral-50 pl-10 pr-4 text-sm font-oswald text-charcoal placeholder-neutral-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>
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
