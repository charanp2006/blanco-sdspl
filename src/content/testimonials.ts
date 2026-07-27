import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [];

export const industriesServed = [
  { name: "Commercial Buildings", description: "Multi-story office, retail, and mixed-use steel frames.", imageKey: "commercial" as const },
  { name: "Industrial Facilities", description: "Warehouses, plants, and large-span industrial structures.", imageKey: "industrial" as const },
  { name: "Institutional Projects", description: "Educational, healthcare, and civic steel structures.", imageKey: "institutional" as const },
  { name: "Infrastructure", description: "Platforms, towers, and structural support systems.", imageKey: "infrastructure" as const },
];

export const whyChooseBlanco = [
  { title: "AISC-Compliant Detailing", description: "Every deliverable checked against AISC provisions." },
  { title: "Tekla-First Workflow", description: "A single, model-centric Tekla Structures pipeline end to end." },
  { title: "Dedicated Checking Department", description: "Independent QC review before any drawing is released." },
  { title: "1,000+ Projects Completed", description: "Experience across a wide range of project types and complexities." },
];
