import type { Testimonial } from "@/types";

// 🔶 Placeholder — brochure does not supply client testimonials or logos.
// Replace with real client quotes and logos before launch (see Phase 1 §Open Items).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Blanco's Tekla models came back clean and AISC-compliant with almost no RFIs during fabrication — exactly the turnaround we needed.",
    author: "Project Director",
    role: "General Contractor",
    company: "🔶 Client name pending",
  },
  {
    quote:
      "Their checking department catches things ours would have missed. It's rare to find a detailing partner that treats QC as seriously as we do.",
    author: "Fabrication Manager",
    role: "Steel Fabricator",
    company: "🔶 Client name pending",
  },
  {
    quote:
      "Consistent, on-time delivery across a dozen projects now. Blanco has become an extension of our own detailing team.",
    author: "VP of Engineering",
    role: "EPC Firm",
    company: "🔶 Client name pending",
  },
];

export const industriesServed = [
  { name: "Commercial Buildings", description: "Multi-story office, retail, and mixed-use steel frames." },
  { name: "Industrial Facilities", description: "Warehouses, plants, and large-span industrial structures." },
  { name: "Institutional Projects", description: "Educational, healthcare, and civic steel structures." },
  { name: "Infrastructure", description: "Platforms, towers, and structural support systems." },
];

export const whyChooseBlanco = [
  { title: "AISC-Compliant Detailing", description: "Every deliverable checked against AISC provisions." },
  { title: "Tekla-First Workflow", description: "A single, model-centric Tekla Structures pipeline end to end." },
  { title: "Dedicated Checking Department", description: "Independent QC review before any drawing is released." },
  { title: "8 Years, 1,000+ Projects", description: "A proven track record delivering for USA-based clients." },
];
