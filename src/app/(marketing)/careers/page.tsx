import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { employeeBenefits, trainingProgram } from "@/content/company";
import { jobOpenings } from "@/content/careers";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { jobPostingSchema } from "@/lib/structuredData";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join Team Blanco — open positions, benefits, and career growth in structural steel detailing.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <InnerPageHero
        title="Join Team Blanco"
        description="We seek individuals who desire to grow and develop with us — born to achieve greater heights in their careers."
      />

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="Benefits & Culture" title="Why Work at Blanco" />
          <RevealOnScroll className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {employeeBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2 text-sm text-neutral-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                {benefit}
              </div>
            ))}
          </RevealOnScroll>
          <RevealOnScroll className="mt-8 rounded-card bg-brand-50 p-6 text-sm text-neutral-700">
            Fresher training runs {trainingProgram.trainingPeriodMonths} months from your date of joining,
            followed by a {trainingProgram.probationPeriodMonths}-month probation — with a clear growth path:{" "}
            <span className="font-semibold">{trainingProgram.growthPath}</span>.
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading eyebrow="Open Roles" title="Current Openings" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job) => (
              <Card key={job.slug} className="p-6">
                <JsonLd data={jobPostingSchema(job)} />
                <Badge variant="neutral">{job.type}</Badge>
                <h3 className="mt-3 font-display text-h4 text-charcoal">{job.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {job.department} · {job.location}
                </p>
                <p className="mt-3 text-sm text-neutral-600">{job.summary}</p>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            🔶 Open roles shown are placeholders — confirm current openings with HR before launch.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Apply Now" title="Application Form" />
          <div className="mt-8">
            <JobApplicationForm openings={jobOpenings} />
          </div>
        </div>
      </section>
    </>
  );
}
