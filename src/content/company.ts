import type { CompanyStat, Department } from "@/types";

export const mission =
  "To deliver innovative, precise, and cost-effective structural steel detailing solutions that exceed client expectations — upholding AISC standards, enhancing value through Tekla-driven technology, and nurturing long-term partnerships built on trust, integrity, and quality.";

export const vision =
  "To become a global leader in structural steel detailing, setting benchmarks for quality, accuracy, and client satisfaction while expanding Blanco's footprint on a foundation of learning, growth, and technical excellence.";

export const valuePillars = [
  {
    title: "World-class detailing, AISC-adherent",
    description: "Every deliverable checked against AISC provisions before it leaves the checking department.",
  },
  {
    title: "Tekla-first workflow",
    description: "A single, model-centric Tekla Structures workflow drives drawings, connections, and take-offs.",
  },
  {
    title: "Client-centric delivery",
    description: "Accurate, cost-effective, and prompt engineering services for USA-based clients.",
  },
] as const;

export const departments: Department[] = [
  { name: "Project Management Team", roles: ["Executive Director / Project Manager", "Project Leaders"] },
  { name: "Modeling Department", roles: ["Senior Modellers", "Junior Modellers"] },
  {
    name: "Drawing Detailing — Shop Drawing",
    roles: ["Drafting Coordinator", "Senior Drafting Engineers", "Junior Drafting Engineers"],
  },
  {
    name: "Drawing Detailing — Erection Drawing",
    roles: ["Drafting Coordinator", "Senior Drafting Engineers", "Junior Drafting Engineers"],
  },
  { name: "Checking Department", roles: ["Checking Coordinator", "Senior Checkers", "Junior Checkers"] },
  {
    name: "Quality Control & Engineering",
    roles: ["Executive Project Engineers", "Senior Structural Engineers", "Junior Structural Engineers (M.Tech only)"],
  },
];

export const companyStats: CompanyStat[] = [
  { label: "Years of Excellence", value: 8 },
  { label: "Projects Completed", value: 1000, suffix: "+" },
  { label: "Ongoing Projects", value: 24, suffix: "+" }, // 🔶 placeholder — confirm exact figure with client
  { label: "Detailing Engineers", value: 80, suffix: "+" }, // 🔶 placeholder — confirm exact figure with client
];

export const employeeBenefits = [
  "Provident Fund (PF)",
  "ESIC (Employee State Insurance Corporation)",
  "Statutory annual bonus",
  "Paid leaves — earned, casual, local & national holidays",
  "Free meals at office canteen, all three times",
  "On-time salary, 1st of every month",
  "Standard working hours, no shift work",
  "Two-lakh mediclaim insurance (non-ESIC employees)",
];

export const trainingProgram = {
  trainingPeriodMonths: 6,
  probationPeriodMonths: 12,
  trainingStipend: "₹18,000 per month during training & professional period",
  growthPath: "Drafting Engineer → Checker / Modeller → Senior → Team Leader → Project Leader → Project Manager",
};
