import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { BlogExplorer } from "@/features/blog-search/BlogExplorer";
import { blogPosts, blogCategories } from "@/content/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on structural steel detailing, Tekla workflows, and AISC compliance from Blanco.",
  path: "/blog",
});

export default function BlogListingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <InnerPageHero
        title="Blog"
        description="Notes on detailing process, Tekla workflows, and AISC compliance from the Blanco engineering team."
      />
      <section className="section-spacing">
        <div className="container-page">
          <BlogExplorer posts={blogPosts} categories={blogCategories} />
        </div>
      </section>
    </>
  );
}
