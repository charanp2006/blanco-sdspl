import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Gallery } from "@/components/sections/Gallery";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { employeeBenefits, trainingProgram } from "@/content/company";
import { images } from "@/constants/images";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Life at Blanco",
  description: "Culture, training, and benefits at Blanco Steel Detailing Services.",
  path: "/about/life-at-blanco",
});

export default function LifeAtBlancoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Life at Blanco" }]} />
      <InnerPageHero
        title="Life at Blanco"
        description="An overview of the working environment, training programs, and employee benefits at Blanco."
      />

      <section className="section-spacing">
        <div className="container-page grid gap-16 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Training & Growth" title="Structured for Career Advancement" />
            <RevealOnScroll className="mt-6 rounded-card border border-neutral-200 p-6">
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>
                  <span className="font-semibold text-charcoal">Training period:</span>{" "}
                  {trainingProgram.trainingPeriodMonths} months from date of joining
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Probation period:</span>{" "}
                  {trainingProgram.probationPeriodMonths} months following training
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Stipend:</span> {trainingProgram.trainingStipend}
                </li>
                <li>
                  <span className="font-semibold text-charcoal">Growth path:</span> {trainingProgram.growthPath}
                </li>
              </ul>
            </RevealOnScroll>
          </div>

          <div>
            <SectionHeading eyebrow="Benefits" title="Working Culture & Benefits" />
            <RevealOnScroll className="mt-6 grid gap-3 sm:grid-cols-2">
              {employeeBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {benefit}
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Office & Culture" title="A Look Inside Blanco" align="center" />
          <div className="mt-10">
            <Gallery images={[images.office.collage, images.team.groupPhoto]} title="Life at Blanco" />
          </div>
        </div>
      </section>
    </>
  );
}
