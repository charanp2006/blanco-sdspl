import type { NavItem } from "@/types";

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about/overview",
    children: [
      { label: "Overview", href: "/about/overview", description: "Profile, mission, vision, history" },
      { label: "Awards", href: "/about/awards", description: "Certifications, milestones" },
      { label: "Our Team", href: "/about/our-team", description: "Departments & leadership" },
      { label: "Life at Blanco", href: "/about/life-at-blanco", description: "Culture, training, office" },
    ],
  },
  {
    label: "Services",
    href: "/services/structural-steel-detailing",
    children: [
      {
        label: "Structural Steel Detailing",
        href: "/services/structural-steel-detailing",
        description: "Shop & erection drawings",
      },
      {
        label: "Connection Design",
        href: "/services/connection-design",
        description: "AISC-compliant connection engineering",
      },
      {
        label: "Tekla Modelling",
        href: "/services/tekla-modelling",
        description: "3D model production & clash checks",
      },
      {
        label: "Material Take-offs",
        href: "/services/material-takeoffs",
        description: "BOM / BOQ for fabrication & procurement",
      },
      {
        label: "AutoCAD Drafting Support",
        href: "/services/autocad-drafting-support",
        description: "2D drafting & documentation",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects/completed",
    children: [
      { label: "Completed Projects", href: "/projects/completed" },
      { label: "Tekla Models", href: "/projects/tekla-models" },
      { label: "Sample Drawings", href: "/projects/sample-drawings" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "CSR", href: "/csr" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: primaryNav.find((n) => n.label === "Services")?.children ?? [],
  company: primaryNav.find((n) => n.label === "About")?.children ?? [],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Sample Drawings", href: "/projects/sample-drawings" },
  ],
};
