import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { brand } from "@/constants/brand";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with Blanco Steel Detailing Services — office details, phone, email, and a quote request form.",
  path: "/contact",
});

export default function ContactPage() {
  const mapQuery = encodeURIComponent(brand.contact.address);

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <InnerPageHero title="Contact Us" description="Tell us about your project and we'll respond with next steps." />

      <section className="section-spacing">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <RevealOnScroll>
              <SectionHeading eyebrow="Office Details" title="Reach Blanco Directly" />
              <ul className="mt-6 space-y-4 text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  {brand.contact.address}
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  {brand.contact.phones.join(" · ")}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  {brand.contact.emails.admin} · {brand.contact.emails.hr}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  {brand.contact.workingHours}
                </li>
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="mt-8 aspect-[4/3] overflow-hidden rounded-card border border-neutral-200">
              <iframe
                title="Blanco office location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.15}>
            <SectionHeading eyebrow="Request a Quote" title="Tell Us About Your Project" />
            <div className="mt-6">
              <QuoteRequestForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
