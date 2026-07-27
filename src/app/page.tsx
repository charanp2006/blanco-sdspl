import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/constants/brand";
import { images } from "@/constants/images";
import { services } from "@/content/services";
import { softwareTools } from "@/content/software";
import { companyStats } from "@/content/company";
import { industriesServed, whyChooseBlanco } from "@/content/testimonials";
import { HomeHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatCounterSection } from "@/components/sections/StatCounterSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { StaggerItem, StaggerReveal, RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Structural Steel Detailing Services | Blanco",
  description: brand.positioning,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero
        eyebrow="AISC-Compliant · Tekla-First"
        title="Precision Structural Steel Detailing, Built on Tekla."
        description={brand.positioning}
        primaryCta={{ label: "Our Services", href: "/services/structural-steel-detailing" }}
        secondaryCta={{ label: "View Our Work", href: "/projects/completed" }}
      />

      {/* About Preview */}
      <section className="section-spacing">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <p className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">About Blanco</p>
            <h2 className="mt-2 text-h1 text-charcoal">
              Engineering the Future of Structural Steel Detailing
            </h2>
            <p className="mt-4 text-neutral-600">
              Blanco Steel Detailing Services Pvt. Ltd. is a structural steel detailing firm based in
              Mysore, Karnataka, India. The company produces shop drawings, erection drawings,
              connection designs, and Tekla-based models — following AISC standards for projects across the USA.
            </p>
            <p className="mt-4 text-neutral-600">
              Founded in 2018, Blanco has grown to become a trusted partner for construction and fabrication companies seeking accurate, on-time deliverables.
            </p>
            <p className="mt-4 text-neutral-600">
              Our team of skilled engineers and detailers is committed to delivering high-quality, precise detailing services that meet the unique needs of each client.
            </p>
            <Button href="/about/overview" variant="outline" className="mt-6">
              Learn About Us
            </Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src={images.office.building} alt="Blanco office" fill className="object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="Every service below is a facet of structural steel detailing, built around Tekla Structures and AISC compliance."
            align="center"
          />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-spacing bg-brand-50/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Projects"
            title="Industries We Serve"
            description="From commercial high-rises to heavy industrial plants — our steel detailing expertise spans a wide range of projects."
            align="center"
          />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesServed.map((industry) => (
              <StaggerItem key={industry.name}>
                <IndustryCard
                  name={industry.name}
                  description={industry.description}
                  imageKey={industry.imageKey}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
          <div className="mt-8 text-center">
            <Button href="/projects/completed" variant="outline">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <StatCounterSection stats={companyStats} />

      {/* Software Expertise */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Our Tools" title="Software We Use" align="center" />
          <RevealOnScroll delay={0.1} className="mt-10">
            <LogoMarquee logos={softwareTools.map((s) => ({ name: s.name, src: s.logo }))} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">
              Join Our Team
            </span>
            <h2 className="mt-3 text-h1 text-charcoal">
              Build Your Career in<br />
              <span className="text-brand">Structural Steel Engineering</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-neutral-600">
              Blanco is always looking for skilled engineers and detailers who want to grow with us.
              If you are driven to deliver precise, high-quality steel detailing work, we would like to hear from you.
            </p>
            <Button href="/careers" variant="primary" className="mt-8">
              View Career Opportunities
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
