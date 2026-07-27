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
    building: "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=1200&q=80",
    // building: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  team: {
    teamBlanco: "/images/team/team-blanco.webp",
    groupPhoto: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    member1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    member2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    member3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    member4: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
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
  services: {
    structuralSteel: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    connectionDesign: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    teklaModelling: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    materialTakeoffs: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    autocadDrafting: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
  },
  industries: {
    commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    industrial: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    institutional: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    infrastructure: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
  placeholders: {
    industriesHero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    careersHero: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80",
    csrHero: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80",
    blogFallback: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    avatarFallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
} as const;
