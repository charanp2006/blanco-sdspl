import type { BlogPost } from "@/types";
import { images } from "@/constants/images";

// 🔶 Seed posts to establish the template — marketing to own an ongoing cadence.
export const blogPosts: BlogPost[] = [
  {
    slug: "tekla-vs-autocad-steel-detailing-workflow",
    title: "Tekla vs. AutoCAD: Choosing the Right Workflow for Steel Detailing",
    excerpt:
      "A practical comparison of 3D model-driven detailing in Tekla Structures versus traditional 2D AutoCAD drafting, and when each makes sense.",
    category: "Detailing Process",
    coverImage: images.placeholders.blogFallback,
    publishedAt: "2026-05-12",
    author: "Blanco Engineering Team",
  },
  {
    slug: "aisc-compliance-checklist-for-detailers",
    title: "An AISC Compliance Checklist Every Detailer Should Follow",
    excerpt:
      "The core AISC checks we run on every connection before a drawing set leaves our checking department.",
    category: "Standards & Compliance",
    coverImage: images.placeholders.blogFallback,
    publishedAt: "2026-04-03",
    author: "Blanco Engineering Team",
  },
  {
    slug: "reducing-rfis-through-model-first-detailing",
    title: "Reducing RFIs Through Model-First Detailing",
    excerpt:
      "How building the Tekla model first — rather than drafting drawings independently — cuts field RFIs on structural steel projects.",
    category: "Best Practices",
    coverImage: images.placeholders.blogFallback,
    publishedAt: "2026-02-18",
    author: "Blanco Engineering Team",
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
