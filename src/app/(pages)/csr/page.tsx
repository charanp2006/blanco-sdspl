import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = buildMetadata({
  title: "Corporate Social Responsibility",
  description: "Blanco's commitment to community and social responsibility.",
  path: "/csr",
});

// 🔶 Placeholder — brochure contains no CSR program details.
// Replace with real CSR content once supplied by the client (Phase 1 §Open Items).
export default function CSRPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "CSR" }]} />
      <InnerPageHero
        title="Corporate Social Responsibility"
        description="An overview of Blanco's approach to corporate social responsibility."
        className="bg-brand-50/40"
      />

      <section className="section-spacing">
        <div className="container-page max-w-2xl">
          <RevealOnScroll>
            <SectionHeading eyebrow="Our Commitment" title="Content Coming Soon" />
            <p className="mt-4 text-neutral-600">
              This page is a placeholder for Blanco's CSR initiatives — community programs, sustainability
              efforts, or employee volunteering initiatives can be detailed here once confirmed.
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              🔶 CSR program specifics were not included in the brochure — please share details for this
              section before launch.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
