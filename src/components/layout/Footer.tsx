import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/constants/brand";
import { footerNav } from "@/constants/nav";
import { images } from "@/constants/images";

export function Footer() {
  return (
    <footer className="bg-charcoal text-neutral-300">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={images.brand.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
            <span className="font-montserrat text-lg font-black uppercase text-white">{brand.shortName}</span>
          </Link>
          <p className="mt-4 text-sm text-neutral-400">{brand.positioning}</p>
          <a
            href={brand.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/20"
          >
            LinkedIn
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
            {footerNav.resources.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="hover:text-white">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
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
            <label className="sr-only" htmlFor="footer-newsletter">
              Email address
            </label>
            <input
              id="footer-newsletter"
              type="email"
              placeholder="Your email"
              className="w-full rounded-pill border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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

      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
