import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { milestones, awards } from "@/content/team";
import { ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Awards & Milestones",
  description: "Certifications, achievements, and milestones from Blanco Steel Detailing Services.",
  path: "/about/awards",
});

export default function AwardsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Awards" }]} />
      <InnerPageHero
        title="Awards & Milestones"
        description="Eight years of measured growth, backed by AISC-compliant delivery on every project."
      />

      <section className="section-spacing">
        <div className="container-page grid gap-16 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Certifications" title="Compliance & Quality" />
            <div className="mt-8 space-y-4">
              {awards.map((award) => (
                <RevealOnScroll
                  key={award.title}
                  className="flex items-start gap-3 rounded-card border border-neutral-200 p-5"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden />
                  <div>
                    <h3 className="font-display text-base font-semibold text-charcoal">{award.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{award.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Growth" title="Company Milestones" />
            <div className="mt-8">
              <Timeline entries={milestones} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
