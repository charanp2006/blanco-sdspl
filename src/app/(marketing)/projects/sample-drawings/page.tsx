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

// 🔶 Placeholder gallery — reuses project render images until real sample
// shop/erection drawing exports are supplied by the client.
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
          <Gallery images={projects.map((p) => p.thumbnail)} title="Sample Drawings" />
          <p className="mt-6 text-xs text-neutral-400">
            🔶 Showing project renders as placeholders — replace with exported shop/erection drawing sheets.
          </p>
        </div>
      </section>
    </>
  );
}
