import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/content/services";
import { softwareTools } from "@/content/software";
import { images } from "@/constants/images";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSoftware = softwareTools.filter((tool) => service.softwareUsed.includes(tool.slug));
  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <Breadcrumbs items={[{ label: "Services", href: "/services/structural-steel-detailing" }, { label: service.name }]} />
      <ServiceHero
        eyebrow="Service"
        title={service.name}
        description={service.overview}
        image={images.hero.steelDetailingWork}
      />

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="Our Process" />
          <div className="mt-10">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-neutral-50">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading eyebrow="What You Get" title="Deliverables" />
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <SectionHeading eyebrow="Why It Matters" title="Benefits" />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="Our Toolset" title="Software Used" align="center" />
          <div className="mt-10">
            <LogoMarquee logos={serviceSoftware.map((s) => ({ name: s.name, src: s.logo }))} />
          </div>
        </div>
      </section>

      {/* <section className="section-spacing bg-brand py-16 text-center text-white">
        <div className="container-page">
          <h2 className="text-h2">Learn more about {service.name.toLowerCase()}</h2>
          <a
            href="/contact"
            className="mt-6 inline-flex rounded-pill bg-white px-8 py-4 font-oswald font-medium text-brand hover:bg-brand-50"
          >
            Contact Us
          </a>
        </div>
      </section> */}

      <section className="section-spacing bg-brand-50/40 py-16">
        <div className="container-page max-w-3xl text-center">
          <SectionHeading eyebrow="Common Questions" title="FAQs" />
          <div className="mt-8">
            <Accordion items={service.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-spacing">
          <div className="container-page">
            <SectionHeading eyebrow="Explore More" title="Related Services" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ServiceCard key={r.slug} service={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
