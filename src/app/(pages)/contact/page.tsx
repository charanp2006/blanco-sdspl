"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { brand } from "@/constants/brand";

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-brand" />,
    label: "Office Address",
    value: brand.contact.address,
  },
  {
    icon: <Mail className="h-5 w-5 text-brand" />,
    label: "HR & Administration",
    value: brand.contact.emails.hr,
    href: `mailto:${brand.contact.emails.hr}`,
  },
  {
    icon: <Mail className="h-5 w-5 text-brand" />,
    label: "Administration",
    value: brand.contact.emails.admin,
    href: `mailto:${brand.contact.emails.admin}`,
  },
  {
    icon: <Phone className="h-5 w-5 text-brand" />,
    label: "Phone",
    value: brand.contact.phones.join("  |  "),
    href: `tel:${brand.contact.phones[0].replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapQuery = encodeURIComponent(brand.contact.address);

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <InnerPageHero
        title="Get in Touch"
        description="Reach out to our HR & Administration team for any inquiries, career questions, or general information about Blanco."
      />

      <section className="section-spacing">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          {/* Left — Contact Details + Map */}
          <div>
            <RevealOnScroll>
              <h2 className="text-h3 text-charcoal">HR &amp; Administration</h2>
            </RevealOnScroll>

            <StaggerReveal className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <StaggerItem key={info.label}>
                  <div className="flex items-start gap-4 rounded-card border border-neutral-200 bg-white p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-1 block text-sm text-neutral-600 transition-colors hover:text-brand"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-neutral-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            {/* Map */}
            <RevealOnScroll delay={0.1} className="mt-8">
              <div className="overflow-hidden rounded-card border border-neutral-200">
                <iframe
                  title="Blanco office location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-[260px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Contact Form */}
          <RevealOnScroll delay={0.1}>
            <div className="rounded-card border border-neutral-200 bg-white p-8">
              <h2 className="text-h4 text-charcoal">Send a Message</h2>
              <p className="mt-1 text-sm text-neutral-400">Our HR team will get back to you shortly.</p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand-100 bg-brand-50">
                    <CheckCircle className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">Message Sent</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Thank you for reaching out. Our HR team will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-neutral-500">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-neutral-500">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-neutral-500">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      inputMode="numeric"
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-neutral-500">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-vertical rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-pill bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-dark hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
