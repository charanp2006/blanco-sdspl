import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { ProjectExplorer } from "@/features/project-filters/ProjectExplorer";
import { projects } from "@/content/projects";

export const metadata = buildMetadata({
  title: "Completed Projects",
  description: "Browse Blanco's completed structural steel detailing projects by sector.",
  path: "/projects/completed",
});

export default function CompletedProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Projects", href: "/projects/completed" }, { label: "Completed Projects" }]} />
      <InnerPageHero
        title="Completed Projects"
        description="1,000+ structural steel detailing projects delivered — a sample of our recent work below."
      />
      <section className="section-spacing">
        <div className="container-page">
          <ProjectExplorer projects={projects} />
        </div>
      </section>
    </>
  );
}
