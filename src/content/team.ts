import type { TimelineEntry } from "@/components/sections/Timeline";
import { images } from "@/constants/images";

// 🔶 Placeholder — brochure lists departments/roles, not named individuals.
// Replace with real leadership names/photos before launch (Phase 1 §Open Items).
export const leadership = [
  { name: "Executive Director", role: "Executive Director / Project Manager", photo: images.team.member1 },
  { name: "Head of Modeling", role: "Head of Modeling Department", photo: images.team.member2 },
  { name: "Head of Checking", role: "Head of Checking Department", photo: images.team.member3 },
  { name: "Head of QC & Engineering", role: "Head of Quality Control & Engineering", photo: images.team.member4 },
];

export const milestones: TimelineEntry[] = [
  { year: "2018", label: "Blanco Steel Detailing Services Pvt. Ltd. founded in Mysore, India." },
  { year: "2020", label: "Growing detailing team and expanding project portfolio." },
  { year: "2023", label: "Crossed 1,000+ completed projects milestone." },
  { year: "2026", label: "Continued growth — 700+ projected team expansion by 2030 per internal roadmap." },
];

export const awards = [
  { title: "AISC-Compliant Delivery", description: "All detailing work adheres to AISC standards for USA clients." },
  // 🔶 Add real certifications/awards (ISO, Tekla partner status, etc.) if applicable.
];
