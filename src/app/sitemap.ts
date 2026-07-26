import type { MetadataRoute } from "next";
import { brand } from "@/constants/brand";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.contact.website;
  const staticRoutes = [
    "",
    "/about/overview",
    "/about/awards",
    "/about/our-team",
    "/about/life-at-blanco",
    "/projects/completed",
    "/projects/tekla-models",
    "/projects/sample-drawings",
    "/careers",
    "/blog",
    "/csr",
    "/contact",
    "/privacy-policy",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
