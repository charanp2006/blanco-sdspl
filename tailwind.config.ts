import type { Config } from "tailwindcss";

// Design tokens sourced from Phase 1 SRS §8 (Design System).
// Primary color extracted programmatically from the Blanco logo (#3E4096).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3E4096", // Blanco Indigo — primary
          dark: "#2B2D6E", // hover/active
          50: "#EEEEFA",
          100: "#D9DAF2",
          200: "#B4B6E5",
          300: "#8E91D8",
          400: "#696CCB",
          500: "#3E4096",
          600: "#33357D",
          700: "#2B2D6E",
          800: "#20214F",
          900: "#161731",
        },
        charcoal: {
          DEFAULT: "#292929",
          light: "#4A4A4A",
        },
        accent: {
          DEFAULT: "#F2A900", // Structural Amber — sparing CTA use only
          dark: "#C98C00",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        success: "#16A34A",
        error: "#DC2626",
        warning: "#D97706",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }], // 56px
        h1: ["2.5rem", { lineHeight: "1.15", fontWeight: "700" }], // 40px
        h2: ["2rem", { lineHeight: "1.2", fontWeight: "700" }], // 32px
        h3: ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }], // 24px
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }], // 20px
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "12px",
        pill: "999px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "section-desktop": "6rem", // 96px
        "section-mobile": "3.5rem", // 56px
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgb(15 23 42 / 0.06)",
        card: "0 4px 16px 0 rgb(15 23 42 / 0.08)",
        "card-hover": "0 8px 24px 0 rgb(15 23 42 / 0.12)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out both",
        "fade-in-up-delay": "fade-in-up 0.4s ease-out 0.1s both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
