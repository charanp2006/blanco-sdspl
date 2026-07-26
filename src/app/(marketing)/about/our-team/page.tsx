import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TeamCard } from "@/components/ui/ContentCards";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { departments } from "@/content/company";
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
        description="Structured for success — driven by roles, united as one team."
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
          <p className="mt-4 text-xs text-neutral-400">
            🔶 Leadership names pending client confirmation — photos/roles shown are placeholders.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Department & Roles" title="Structured for Success" />
          <StaggerReveal className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <StaggerItem key={dept.name} className="rounded-card border border-neutral-200 bg-white p-6">
                <h3 className="font-display text-base font-semibold text-charcoal">{dept.name}</h3>
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
