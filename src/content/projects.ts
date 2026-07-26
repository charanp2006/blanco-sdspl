import type { Project } from "@/types";
import { images } from "@/constants/images";

// 🔶 Sector/location/tonnage are placeholders — brochure supplies renders only,
// not per-project metadata. Replace with real project data before launch.
export const projects: Project[] = [
  {
    slug: "commercial-office-frame",
    title: "Multi-Story Office Steel Frame",
    sector: "commercial",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[0],
    gallery: [images.projects[0], images.projects[1]],
    summary: "Multi-story structural steel frame detailed for fabrication and erection.",
  },
  {
    slug: "curved-roof-truss-system",
    title: "Curved Roof Truss System",
    sector: "industrial",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[1],
    gallery: [images.projects[1], images.projects[2]],
    summary: "Large-span curved roof trusses modelled and detailed for an industrial facility.",
  },
  {
    slug: "circular-platform-structure",
    title: "Circular Platform Structure",
    sector: "industrial",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[2],
    gallery: [images.projects[2]],
    summary: "Radial steel platform structure with full connection detailing.",
  },
  {
    slug: "multi-level-stair-tower",
    title: "Multi-Level Stair & Frame Tower",
    sector: "institutional",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[3],
    gallery: [images.projects[3]],
    summary: "Vertical circulation tower with integrated structural steel framing.",
  },
  {
    slug: "gable-frame-building",
    title: "Gable Frame Building",
    sector: "commercial",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[4],
    gallery: [images.projects[4]],
    summary: "Two-story gable-frame building detailed from model through construction.",
  },
  {
    slug: "multi-bay-warehouse-frame",
    title: "Multi-Bay Warehouse Frame",
    sector: "industrial",
    location: "USA",
    softwareUsed: ["tekla-structures"],
    thumbnail: images.projects[5],
    gallery: [images.projects[5]],
    summary: "Multi-bay warehouse structural frame, modelled and detailed for erection.",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const sectorOptions = [
  { label: "All Sectors", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
  { label: "Institutional", value: "institutional" },
] as const;
