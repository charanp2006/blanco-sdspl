import type { CompanyStat, Department } from "@/types";

export const mission =
  "Blanco Steel Detailing Services is focused on delivering accurate structural steel detailing in compliance with AISC standards, using Tekla Structures as the primary modelling platform.";

export const vision =
  "To build a recognised practice in structural steel detailing known for technical accuracy, consistent delivery, and steady growth in capability.";

export const valuePillars = [
  {
    title: "AISC-Adherent Detailing",
    description: "All deliverables are checked against AISC provisions before issue.",
  },
  {
    title: "Tekla-First Workflow",
    description: "A single model-centric Tekla Structures workflow drives drawings, connections, and take-offs.",
  },
  {
    title: "Process-Driven Delivery",
    description: "Work follows a structured process from model review through checking and issue.",
  },
] as const;

export const departmentIntro =
  "At TEAM BLANCO, we believe that well-defined roles and structured departmentalization form the foundation for operational efficiency, skill specialization, and agile management. This framework not only drives the company's success but also fosters a culture of fairness and opportunity. By organizing our workforce into dedicated departments, we ensure that every employee is empowered according to their experience, expertise, and potential.";

export const departmentModel =
  "Our departmental model promotes clarity in responsibility, enhances communication, and streamlines project execution. Each department operates with clear objectives while working collaboratively with others, ensuring alignment with overall business goals.";

export const departmentLeadership =
  "We place great emphasis on nurturing leadership within each role. Whether in design, engineering, project management, or support services, every team member is encouraged to take ownership and lead with initiative.";

export const departments: Department[] = [
  {
    name: "Project Management Team",
    roles: ["Executive Director / Project Manager", "Project Leaders"],
  },
  {
    name: "Modeling Department",
    roles: ["Senior Modellers", "Junior Modellers"],
  },
  {
    name: "Drawing Detailing — Shop Drawing",
    roles: ["Drafting Coordinator", "Senior Drafting Engineers", "Junior Drafting Engineers"],
  },
  {
    name: "Drawing Detailing — Erection Drawing",
    roles: ["Drafting Coordinator", "Senior Drafting Engineers", "Junior Drafting Engineers"],
  },
  {
    name: "Checking Department",
    roles: ["Checking Coordinator", "Senior Checkers", "Junior Checkers"],
  },
  {
    name: "Quality Control & Engineering",
    roles: ["Executive Project Engineers", "Senior Structural Engineers", "Junior Structural Engineers (M.Tech only)"],
  },
];

export const companyStats: CompanyStat[] = [
  { label: "Projects Completed", value: 1000, suffix: "+" },
  { label: "Ongoing Projects", value: 24, suffix: "+" },
  { label: "Detailing Engineers", value: 80, suffix: "+" },
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
