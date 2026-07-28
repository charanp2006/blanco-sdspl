import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { milestones, awards } from "@/content/team";
import { ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Awards & Milestones",
  description: "Certifications, achievements, and milestones from Blanco Steel Detailing Services.",
  path: "/about/awards",
});

const awardImages = [
  { src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=640&h=440&fit=crop", alt: "Excellence in Steel Detailing Award" },
  { src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=640&h=440&fit=crop", alt: "Best Workplace Culture" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=440&fit=crop", alt: "Industry Innovation Recognition" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=640&h=440&fit=crop", alt: "Quality Compliance Certificate" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&h=440&fit=crop", alt: "Outstanding Project Delivery" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=640&h=440&fit=crop", alt: "Top Employer Award" },
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=640&h=440&fit=crop", alt: "Corporate Excellence Trophy" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=640&h=440&fit=crop", alt: "Safety & Compliance Shield" },
];

export default function AwardsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Awards" }]} />
      <InnerPageHero
        title="Awards & Milestones"
        description="Key milestones and certifications from Blanco's years of operation."
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
                    <h3 className="text-base font-semibold text-charcoal">{award.title}</h3>
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

      {/* Awards Gallery Marquee */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Achievements"
            title="Awards Gallery"
            description="A glimpse of the recognitions and accolades earned by our team."
            align="center"
          />
          <div className="mt-10">
            <ImageMarquee images={awardImages} />
          </div>
        </div>
      </section>
    </>
  );
}
