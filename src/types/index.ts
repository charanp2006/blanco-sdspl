export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface SoftwareTool {
  slug: string;
  name: string;
  logo: string; // path under /public/images/software
  role: string; // how Blanco uses it, e.g. "Primary modelling platform"
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  process: { step: string; description: string }[];
  deliverables: string[];
  benefits: string[];
  softwareUsed: SoftwareTool["slug"][];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // slugs
}

export interface Project {
  slug: string;
  title: string;
  sector: "commercial" | "industrial" | "institutional" | "residential" | "infrastructure";
  location: string;
  tonnage?: string;
  softwareUsed: SoftwareTool["slug"][];
  thumbnail: string;
  gallery: string[];
  summary: string;
}

export interface Department {
  name: string;
  roles: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Internship";
  summary: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  author: string;
}

export interface CompanyStat {
  label: string;
  value: number;
  suffix?: string;
}
