import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { Gallery } from "@/components/sections/Gallery";
import { projects } from "@/content/projects";

export const metadata = buildMetadata({
  title: "Tekla Models",
  description: "A gallery of Tekla Structures models produced by the Blanco detailing team.",
  path: "/projects/tekla-models",
});

export default function TeklaModelsPage() {
  const teklaProjects = projects.filter((p) => p.softwareUsed.includes("tekla-structures"));

  return (
    <>
      <Breadcrumbs items={[{ label: "Projects", href: "/projects/completed" }, { label: "Tekla Models" }]} />
      <InnerPageHero
        title="Tekla Models"
        description="Structural steel models built end to end in Tekla Structures, from IFC coordination through fabrication-ready detail."
      />
      <section className="section-spacing">
        <div className="container-page">
          <Gallery images={teklaProjects.map((p) => p.thumbnail)} title="Tekla Models" />
        </div>
      </section>
    </>
  );
}
