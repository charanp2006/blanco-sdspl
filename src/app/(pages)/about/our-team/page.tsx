import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TeamCard } from "@/components/ui/ContentCards";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
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
