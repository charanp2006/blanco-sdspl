import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { mission, vision, valuePillars } from "@/content/company";
import { brand } from "@/constants/brand";
import { images } from "@/constants/images";

export const metadata = buildMetadata({
  title: "About Blanco — Company Overview",
  description: "Profile, mission, vision, history, and global presence of Blanco Steel Detailing Services.",
  path: "/about/overview",
});

export default function AboutOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Overview" }]} />
      <InnerPageHero
        title="About Blanco"
        description="Celebrating 8 successful years delivering AISC-compliant structural steel detailing to USA-based clients."
      />

      <section className="section-spacing">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="Our Story" title="Client-Centric, Cost-Effective, On Time" />
            <p className="mt-4 text-neutral-600">
              Blanco Steel Detailing Services Pvt. Ltd. is now in its 8th year, offering structural steel
              detailing for large-scale residential, commercial, and industrial projects while complying with
              AISC (American Institute for Steel Construction) standards. Our workflow is built around Tekla
              Structures, supported by AutoCAD, RISA, RAM, and IDEA StatiCa.
            </p>
            <p className="mt-4 text-neutral-600">
              With 1,000+ projects completed and dozens ongoing, our well-qualified project management,
              structural engineering, and detailing teams deliver state-of-the-art, prompt engineering
              services across the USA.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src={images.team.groupPhoto} alt="Team Blanco" fill className="object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <RevealOnScroll className="rounded-card bg-brand p-8 text-white">
            <h3 className="font-display text-h3">Our Mission</h3>
            <p className="mt-3 text-brand-100">{mission}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="rounded-card border border-neutral-200 bg-white p-8">
            <h3 className="font-display text-h3 text-charcoal">Our Vision</h3>
            <p className="mt-3 text-neutral-600">{vision}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valuePillars.map((pillar) => (
              <RevealOnScroll key={pillar.title} className="rounded-card border border-neutral-200 p-6 text-center">
                <h3 className="font-display text-base font-semibold text-charcoal">{pillar.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{pillar.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page text-center">
          <SectionHeading eyebrow="Global Presence" title="Delivering for USA Clients from India" align="center" />
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Blanco operates from Mysore, Karnataka, India, alongside sister company{" "}
            <span className="font-semibold text-charcoal">{brand.sisterCompany}</span>, delivering structural
            steel detailing to construction and fabrication clients across the United States.
          </p>
        </div>
      </section>
    </>
  );
}
