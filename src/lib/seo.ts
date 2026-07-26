import type { Metadata } from "next";
import { brand } from "@/constants/brand";
import { images } from "@/constants/images";

export function buildMetadata({
  title,
  description,
  path,
  image = images.hero.steelDetailingWork,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${brand.contact.website}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
