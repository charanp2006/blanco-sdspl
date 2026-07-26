import { brand } from "@/constants/brand";
import type { BlogPost, JobOpening, Service } from "@/types";

const siteUrl = brand.contact.website;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    alternateName: brand.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/blanco-logo.webp`,
    foundingDate: String(brand.founded),
    sameAs: [brand.social.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.contact.phones[0],
      email: brand.contact.emails.admin,
      contactType: "customer service",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    description: brand.positioning,
    url: siteUrl,
    telephone: brand.contact.phones[0],
    email: brand.contact.emails.admin,
    address: {
      "@type": "PostalAddress",
      streetAddress: "#3051, 1st, 2nd & 3rd Floor, SPYR Arcade, Ring Road Near Mahamane Circle, Dattagalli 3rd Stage",
      addressLocality: "Mysore",
      addressRegion: "Karnataka",
      postalCode: "570033",
      addressCountry: "IN",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${siteUrl}${item.url}` } : {}),
    })),
  };
}

export function jobPostingSchema(job: JobOpening) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "INTERN",
    hiringOrganization: {
      "@type": "Organization",
      name: brand.name,
      sameAs: siteUrl,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mysore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    datePosted: new Date().toISOString().split("T")[0],
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/blanco-logo.webp`,
      },
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.overview,
    provider: {
      "@type": "Organization",
      name: brand.name,
      url: siteUrl,
    },
    areaServed: "United States",
    url: `${siteUrl}/services/${service.slug}`,
  };
}
