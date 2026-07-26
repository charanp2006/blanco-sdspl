import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/ui/ContentCards";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <article className="section-spacing">
        <div className="container-page max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">{post.category}</p>
          <h1 className="mt-2 font-display text-h1 text-charcoal">{post.title}</h1>
          <p className="mt-3 text-sm text-neutral-500">
            {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-US", { dateStyle: "long" })}
          </p>

          <RevealOnScroll className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </RevealOnScroll>

          <div className="prose prose-neutral mt-10 max-w-none text-neutral-700">
            <p>{post.excerpt}</p>
            <p className="mt-4 text-sm text-neutral-400">
              🔶 Full article body pending — this is a seed post establishing the template; add complete
              content before publishing.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-spacing bg-neutral-50">
          <div className="container-page">
            <h2 className="font-display text-h3 text-charcoal">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <BlogCard post={r} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
