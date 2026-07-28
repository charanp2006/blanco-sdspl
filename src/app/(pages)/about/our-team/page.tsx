import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TeamCard } from "@/components/ui/ContentCards";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { LightSpeedReveal } from "@/components/ui/LightSpeedReveal";
import { departments, departmentIntro, departmentModel, departmentLeadership } from "@/content/company";
import { leadership } from "@/content/team";

export const metadata = buildMetadata({
  title: "Our Team",
  description: "Meet the departments and leadership behind Blanco Steel Detailing Services.",
  path: "/about/our-team",
});

export default function OurTeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Our Team" }]} />
      <InnerPageHero
        title="Our Team"
        description="Structured for Success. Driven by Roles. United as One Team."
      />

      {/* Team Overview */}
      <section className="section-spacing">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <LightSpeedReveal from="left" delay={0.1}>
            <p className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">Who We Are</p>
            <h2 className="mt-2 text-h2 text-charcoal">
              A Team Built on Precision &amp; Passion
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              At Blanco, every project is powered by a dedicated team of engineers, detailers, and
              professionals who share a common goal — delivering structural steel detailing of the
              highest standard. From design coordination to fabrication-ready outputs, our people
              make the difference.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We foster a collaborative work culture where growth is encouraged, skills are constantly
              sharpened, and every team member is valued for the unique expertise they bring to the table.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Whether it&apos;s complex connection design, large-scale Tekla modelling, or tight-deadline
              shop drawings — our team rises to the challenge, every time.
            </p>
          </LightSpeedReveal>
          <LightSpeedReveal from="right" delay={0.3} className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Blanco team collaborating together"
              fill
              className="object-cover"
            />
          </LightSpeedReveal>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Meet the Team" />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <StaggerItem key={person.role}>
                <TeamCard name={person.name} role={person.role} photo={person.photo} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Department & Roles"
            title="Structured for Success"
          />

          <RevealOnScroll className="mt-8 space-y-5 text-neutral-600 leading-relaxed">
            <p>{departmentIntro}</p>
            <p>{departmentModel}</p>
            <p>{departmentLeadership}</p>
          </RevealOnScroll>

          <StaggerReveal className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <StaggerItem key={dept.name} className="rounded-card border border-neutral-200 bg-white p-6">
                <h3 className="text-base font-semibold text-charcoal">{dept.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-600">
                  {dept.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}
