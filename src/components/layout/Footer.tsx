import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/constants/brand";
import { footerNav } from "@/constants/nav";
import { images } from "@/constants/images";

export function Footer() {
  return (
    <footer className="bg-brand/70 text-charcoal">
      <div className="container-page py-16">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          {/* Logo + name + social */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={images.brand.logo}
                alt="Blanco Logo"
                width={480}
                height={480}
                className="h-10 w-auto object-contain rounded-[50%] p-[1.5px] bg-[#3e4095]"
              />
              <div className="flex flex-col leading-2">
                <span className="font-montserrat text-lg font-black leading-tight tracking-[0.01em]">
                  {brand.brandName}
                </span>
                <span className="font-oswald text-[10px] font-extrabold text-[#3e4095] tracking-[0.09em] uppercase">
                  {brand.service}
                </span>
              </div>
            </Link>
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-white/30 px-3 py-2 text-xs font-semibold hover:bg-brand/90 hover:text-white"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/* Services + Company in a row */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Services</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {footerNav.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-white">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Company</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {footerNav.company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="hover:text-white">{c.label}</Link>
                  </li>
                ))}
                {footerNav.resources.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="hover:text-white">{r.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.address}
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.phones[0]}
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.emails.admin}
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={images.brand.logo}
                alt="Blanco Logo"
                width={480}
                height={480}
                className="h-10 w-auto object-contain rounded-[50%] p-[1.5px] bg-[#3e4095]"
              />
              <div className="flex flex-col leading-2">
                <span className="font-montserrat text-lg font-black leading-tight tracking-[0.01em]">
                  {brand.brandName}
                </span>
                <span className="font-oswald text-[10px] font-extrabold text-[#3e4095] tracking-[0.09em] uppercase">
                  {brand.service}
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-neutral">{brand.positioning}</p>
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-white/30 px-3 py-2 text-xs font-semibold hover:bg-brand/90 hover:text-white"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                </li>
              ))}
              {footerNav.resources.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-white">{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.address}
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.phones[0]}
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden />
                {brand.contact.emails.admin}
              </li>
            </ul>
            <form className="mt-5 flex gap-2" aria-label="Newsletter signup">
              <label className="sr-only" htmlFor="footer-newsletter">Email address</label>
              <input
                id="footer-newsletter"
                type="email"
                placeholder="Your email"
                className="w-full rounded-pill border border-white/50 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              />
              <button
                type="submit"
                className="flex-shrink-0 rounded-pill bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/50 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-charcoal md:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
