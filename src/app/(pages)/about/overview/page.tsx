import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatCounterSection } from "@/components/sections/StatCounterSection";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { mission, vision, companyStats } from "@/content/company";
import { brand } from "@/constants/brand";
import { images } from "@/constants/images";

export const metadata = buildMetadata({
  title: "About Blanco — Company Overview",
  description: "Profile, mission, vision, history, and global presence of Blanco Steel Detailing Services.",
  path: "/about/overview",
});

const expertiseList = [
  "Tekla Structures",
  "AutoCAD",
  "RISA",
  "RAM",
  "IDEA StatiCa",
];

const trackRecordPoints = [
  {
    title: "Advanced Tools & Professionals",
    desc: "By leveraging advanced tools and highly skilled professionals, we aim to drive excellence in every project we undertake, contributing to safer, smarter, and more cost-effective steel structure design and detailing services.",
  },
  {
    title: "Proven History of Reliability",
    desc: "Through experienced project management and a dedicated structural engineering team, we have built a proven history of reliability with thousands of successful project completions.",
  },
  {
    title: "Continuous Growth & Innovation",
    desc: "Managing dozens of ongoing projects and continuously exploring new opportunities for growth and innovation in the structural engineering landscape.",
  },
];

export default function AboutOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Overview" }]} />
      <InnerPageHero
        title="About Blanco Steel Detailing Services"
        description="An overview of Blanco Steel Detailing Services — our work, structure, and approach to steel detailing."
      />

      {/* ── Who We Are ── */}
      <section className="section-spacing">
        <div className="container-page">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">Who We Are</span>
            <h2 className="mt-2 text-h2 text-charcoal">Engineering the Future of Steel Design</h2>
          </RevealOnScroll>

          <div className="mt-12 grid items-center gap-16 md:grid-cols-2">
            <RevealOnScroll>
              <p className="text-neutral-600 leading-relaxed">
                Blanco Steel Detailing Services Pvt Ltd is a client-centric engineering organization delivering
                state-of-the-art, cost-effective, and prompt services across the USA. Founded with the vision to
                be a global leader in structural steel design and detailing, our highly qualified team utilizes
                the latest industry trends and advanced technologies to bring complex structures to life.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Blanco Steel Detailing Services Pvt Ltd was established with an aim to be a global leader in
                structural steel design and detailing services by catering to the latest trends and technologies
                in the industry.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                We at TEAM BLANCO offer top-notch services in structural design and steel detailing for
                large-scale residential, commercial, and industrial projects while complying with AISC
                (American Institute for Steel Construction). With a well-qualified and experienced Project
                Management, Structural Engineers, and highly qualified detailing team.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="flex justify-center">
              <div className="relative h-[360px] w-[360px] overflow-hidden rounded-full shadow-xl">
                <Image
                  src={images.team.teamBlanco}
                  alt="Team Blanco"
                  fill
                  className="object-cover object-center"
                  sizes="360px"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Our Expertise ── */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page grid items-center gap-16 md:grid-cols-2">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">Our Expertise</span>
            <h2 className="mt-2 text-h2 text-charcoal">Industry-Leading Tools & Technology</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We offer top-notch services for large-scale residential, commercial, and industrial projects.
              All our engineering and detailing work strictly complies with the American Institute for Steel
              Construction (AISC) standards.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              To ensure precision and efficiency, our team utilizes industry-leading, advanced software,
              including:
            </p>
            <ul className="mt-5 space-y-3">
              {expertiseList.map((sw) => (
                <li key={sw} className="flex items-center gap-3 text-sm font-medium text-charcoal">
                  <CircleCheckBig className="h-5 w-5 flex-shrink-0 text-brand" />
                  {sw}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="relative">
            <div className="absolute -right-3 -top-3 bottom-3 left-3 rounded-card border border-brand-200" />
            <div className="relative overflow-hidden rounded-card">
              <Image
                src={images.hero.steelDetailingWork}
                alt="3D BIM model by Blanco Steel"
                width={600}
                height={400}
                className="h-auto w-full rounded-card object-cover shadow-xl"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Our Proven Track Record ── */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Proven Track Record"
            title="Built on Experience & Excellence"
            align="center"
          />

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
            {/* Left — Key Points */}
            <RevealOnScroll className="space-y-6">
              {trackRecordPoints.map((pt) => (
                <div key={pt.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                    <CircleCheckBig className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">{pt.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </RevealOnScroll>

            {/* Right — Quote */}
            <RevealOnScroll delay={0.1}>
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-card border border-brand-200 bg-white p-12 text-center shadow-soft">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-100 bg-brand-50">
                  <span className="text-4xl text-brand">&ldquo;</span>
                </div>
                <p className="max-w-sm font-dm-mono italic text-lg text-charcoal">
                  Today the company is growing rapidly, with over 1,000+ projects completed,
                  dozens of on-going projects, and several new opportunities.
                </p>
                <div className="mt-6 h-[3px] w-16 rounded-full bg-brand" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatCounterSection stats={companyStats} />

      {/* ── Mission & Vision ── */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Mission & Vision"
            description="At Blanco Steel Detailing Services Pvt. Ltd., our mission is to deliver innovative, precise, and cost-effective structural steel design and detailing solutions that exceed client expectations."
            align="center"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <StaggerReveal>
              <StaggerItem className="relative overflow-hidden rounded-card border border-neutral-200 bg-white p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-oswald text-xs font-bold uppercase tracking-widest text-brand">Our Mission</h3>
                  <p className="mt-4 text-neutral-600 leading-relaxed">{mission}</p>
                  <p className="mt-4 font-semibold text-charcoal">Precision. Passion. Performance.</p>
                  <ul className="mt-5 space-y-2.5 text-sm text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To provide world-class structural steel detailing and design services adhering to international standards such as AISC.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To continuously innovate by integrating the latest technologies like Tekla, AutoCAD, IDEA StatiCa and many other advanced software.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To empower our clients by delivering accurate, timely, and efficient engineering support across residential, commercial, and industrial sectors.
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerReveal>

            {/* Vision */}
            <StaggerReveal>
              <StaggerItem className="relative overflow-hidden rounded-card border border-neutral-200 bg-white p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <span className="text-2xl">🔭</span>
                  </div>
                  <h3 className="font-oswald text-xs font-bold uppercase tracking-widest text-brand">Our Vision</h3>
                  <p className="mt-4 text-neutral-600 leading-relaxed">{vision}</p>
                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    Our vision defines the future we strive to create. It guides our strategy, inspires our team,
                    and shapes the legacy we aim to leave in the global structural engineering landscape.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To become a global leader in structural steel design and detailing services.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To set benchmarks for quality, accuracy, and client satisfaction in the engineering services industry.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      To expand our global footprint while cultivating a work culture rooted in learning, growth, and technical excellence.
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="section-spacing">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Global Presence"
            title="Delivering for USA Clients from India"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Blanco operates from Mysore, Karnataka, India, delivering structural
            steel detailing to construction and fabrication clients across the United States.
          </p>
        </div>
      </section>

      {/* ── Sister Company — Blanka ── */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll className="flex justify-center">
            <div className="relative h-[160px] w-[280px]">
              <Image
                src={images.brand.sisterCompanyLogo}
                alt="Blanka Engineering & Construction"
                fill
                className="object-contain"
                sizes="280px"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">
              Our Sister Company
            </span>
            <h2 className="mt-2 text-h2 text-charcoal">{brand.sisterCompany}</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Blanka extends our capabilities into civil and structural construction, offering a
              comprehensive engineering group. Together, Blanco and Blanka deliver end-to-end
              structural solutions — from steel detailing through to on-site construction.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              This partnership allows us to provide clients with a seamless workflow across design,
              detailing, fabrication support, and construction — all under one roof in Mysore, India.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Careers CTA ── */}
      <section className="py-28 md:py-36" style={{ background: "radial-gradient(ellipse at center, rgba(62,64,255,0.3) 0%, transparent 60%)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">
              Join Our Team
            </span>
            <h2 className="mt-3 text-h1 text-charcoal">
              Ready to Join the Team?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-neutral-600">
              TEAM BLANCO has created a world-class environment for ambitious engineers and professionals
              who are very passionate about their careers. We value our employees more than anything.
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
