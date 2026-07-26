export const brand = {
  name: "Blanco Steel Detailing Services Pvt. Ltd.",
  shortName: "Blanco",
  sisterCompany: "Blanka Engineering & Construction Pvt Ltd",
  founded: 2018, // "8th successful year" as of 2026 per brochure
  tagline: "Precision. Passion. Performance.",
  positioning:
    "AISC-compliant structural steel detailing, built on Tekla Structures, for USA construction and fabrication clients.",
  contact: {
    address:
      "#3051, 1st, 2nd & 3rd Floor, SPYR Arcade, Ring Road Near Mahamane Circle, Dattagalli 3rd Stage, Mysore, Karnataka, India – 570033",
    phones: ["+91 821 295 7958", "+91 9972342126"],
    emails: {
      hr: "hr@blanco-sdspl.com",
      admin: "admin@blanco-sdspl.com",
    },
    website: "https://www.blanco-sdspl.com",
    workingHours: "9:00 AM – 6:00 PM IST · 1st & 3rd Saturday off",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/blanco-steel-detailing-services-pvt-ltd",
  },
} as const;

// Scope correction (client feedback, post-Phase-1):
// Blanco is a pure structural STEEL DETAILING company — not a multi-discipline
// BIM/design shop. Primary tool is Tekla Structures; the core credibility claim
// is AISC compliance. Service and software content in /src/content reflects this.
