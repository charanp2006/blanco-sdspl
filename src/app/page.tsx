import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/constants/brand";
import { images } from "@/constants/images";
import { services } from "@/content/services";
import { softwareTools } from "@/content/software";
import { companyStats } from "@/content/company";
import { projects } from "@/content/projects";
import { testimonials, industriesServed, whyChooseBlanco } from "@/content/testimonials";
import { HomeHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatCounterSection } from "@/components/sections/StatCounterSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/ContentCards";
import { StaggerItem, StaggerReveal, RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "Structural Steel Detailing Services | Blanco",
  description: brand.positioning,
  path: "/",
});

const sharedProcess = services[0]?.process ?? [];

export default function HomePage() {
  return (
    <>
      <HomeHero
        eyebrow="AISC-Compliant · Tekla-First"
        title="Precision Structural Steel Detailing, Built on Tekla."
        description={brand.positioning}
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/projects/completed" }}
        image={images.hero.steelDetailingWork}
      />

      {/* About Preview */}
      <section className="section-spacing">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">About Blanco</p>
            <h2 className="mt-2 font-display text-h2 text-charcoal">
              8 Years of Precision Steel Detailing for USA Clients
            </h2>
            <p className="mt-4 text-neutral-600">
              Blanco Steel Detailing Services Pvt. Ltd. delivers AISC-compliant structural steel detailing —
              shop drawings, erection drawings, connection design, and Tekla-based modelling — for
              construction, fabrication, and EPC clients across the USA.
            </p>
            <Button href="/about/overview" variant="outline" className="mt-6">
              Learn About Us
            </Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src={images.office.collage} alt="Blanco office" fill className="object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Blanco */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Why Blanco" title="Built for Accuracy, Not Just Speed" align="center" />
          <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseBlanco.map((item) => (
              <StaggerItem key={item.title} className="rounded-card border border-neutral-200 bg-white p-6">
                <ShieldCheck className="h-6 w-6 text-brand" aria-hidden />
                <h3 className="mt-3 font-display text-base font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Structural Steel Detailing Services"
            description="Every service below is a facet of one discipline — structural steel detailing — built around Tekla Structures and AISC compliance."
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

      {/* Industries Served */}
      <section className="section-spacing bg-brand-50/40">
        <div className="container-page">
          <SectionHeading eyebrow="Where We Deliver" title="Industries Served" align="center" />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesServed.map((industry) => (
              <StaggerItem key={industry.name} className="rounded-card bg-white p-6 text-center shadow-soft">
                <h3 className="font-display text-base font-semibold text-charcoal">{industry.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{industry.description}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Statistics Counter */}
      <StatCounterSection stats={companyStats} />

      {/* Project Highlights */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="Our Work" title="Recent Project Highlights" />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
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

      {/* Software Expertise */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Our Toolset" title="Software Expertise" align="center" />
          <RevealOnScroll delay={0.1} className="mt-10">
            <LogoMarquee logos={softwareTools.map((s) => ({ name: s.name, src: s.logo }))} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="How We Work" title="Our Detailing Process" />
          <div className="mt-10">
            <ProcessSteps steps={sharedProcess} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-charcoal">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            align="center"
            className="[&_h2]:text-white [&_p]:text-neutral-300"
          />
          <StaggerReveal className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="container-page">
          <h2 className="font-display text-h2">Have a Structural Steel Project?</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Tell us the scope and we'll get back to you with a detailing plan and timeline.
          </p>
          <Button href="/contact" variant="accent" size="lg" className="mt-6">
            Request a Quote
          </Button>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-spacing">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="Get In Touch" title="Start a Conversation" />
            <p className="mt-4 text-neutral-600">
              Reach out with your project scope and we'll respond with next steps.{" "}
              <Link href="/contact" className="font-semibold text-brand underline">
                View full contact details →
              </Link>
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
