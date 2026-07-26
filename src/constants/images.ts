// Single source of truth for image paths, so real client photography can
// replace placeholders later without touching component code.
export const images = {
  brand: {
    logo: "/images/blanco-logo.webp",
    sisterCompanyLogo: "/images/blanka-logo.webp",
  },
  hero: {
    home: "/images/hero-cover.webp",
    steelDetailingWork: "/images/steel-detailing-work.webp",
  },
  office: {
    collage: "/images/office/office-collage.webp",
  },
  team: {
    groupPhoto: "/images/team/team-blanco.webp",
  },
  projects: [
    "/images/projects/project-1.webp",
    "/images/projects/project-2.webp",
    "/images/projects/project-3.webp",
    "/images/projects/project-4.webp",
    "/images/projects/project-5.webp",
    "/images/projects/project-6.webp",
  ],
  software: {
    tekla: "/images/software/tekla.png",
    autocad: "/images/software/autocad.webp",
    risa: "/images/software/risa.png",
    ram: "/images/software/ram.png",
    ideaStatica: "/images/software/idea-statica.png",
  },
  // 🔶 Not supplied by client brochure — placeholder, sourced from a
  // royalty-free library until real photography is provided.
  placeholders: {
    industriesHero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    careersHero: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    csrHero: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    blogFallback: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    avatarFallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
} as const;
