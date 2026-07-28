import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { Gallery } from "@/components/sections/Gallery";
import { projects } from "@/content/projects";

export const metadata = buildMetadata({
  title: "Sample Drawings",
  description: "Sample shop and erection drawings from Blanco's structural steel detailing work.",
  path: "/projects/sample-drawings",
});

export default function SampleDrawingsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Projects", href: "/projects/completed" }, { label: "Sample Drawings" }]} />
      <InnerPageHero
        title="Sample Drawings"
        description="A preview of the shop and erection drawing quality our detailing team delivers."
      />
      <section className="section-spacing">
        <div className="container-page">
          <Gallery
            items={projects.map((p) => ({ src: p.thumbnail, title: p.title }))}
            title="Sample Drawings"
          />
        </div>
      </section>
    </>
  );
}
