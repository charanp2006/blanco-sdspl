"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Coffee,
  Calendar,
  Gift,
  CheckCircle,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { jobOpenings } from "@/content/careers";
import { employeeBenefits, trainingProgram } from "@/content/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { jobPostingSchema } from "@/lib/structuredData";

/* ─────────────────────────── data ─────────────────────────── */

const benefits = [
  {
    icon: <BookOpen className="h-7 w-7 text-brand" />,
    title: "Structured Training",
    desc: `Training and development are ongoing processes that enhance employee skills and knowledge. Fresher's training period will be ${trainingProgram.trainingPeriodMonths} months from the date of joining, followed by a ${trainingProgram.probationPeriodMonths}-month probation period.`,
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-brand" />,
    title: "Career Growth",
    desc: "By gaining experience and specializing in specific areas, employees can progress through the following career path.",
  },
  {
    icon: <Award className="h-7 w-7 text-brand" />,
    title: "Technical Mentorship",
    desc: "Work alongside experienced engineers and receive structured mentorship throughout your career at Blanco.",
  },
  {
    icon: <Users className="h-7 w-7 text-brand" />,
    title: "Collaborative Culture",
    desc: "Join a collaborative, knowledge-sharing environment that values technical depth and team success.",
  },
  {
    icon: <Coffee className="h-7 w-7 text-brand" />,
    title: "Work-Life Balance",
    desc: "Standard working hours are 9 a.m. to 6 p.m. Every 1st and 3rd Saturday is a holiday every month.",
  },
  {
    icon: <Calendar className="h-7 w-7 text-brand" />,
    title: "Celebrations & Activities",
    desc: "We celebrate all festivals together with employees. Team lunches, outings, and many other team-engaging activities.",
  },
];

const statutoryBenefits = [
  "Provident Fund (PF)",
  "ESIC (Employee State Insurance Corporation)",
  "Statutory annual bonus",
  "Paid leaves — earned, casual, local & national holidays",
];

const otherBenefits = [
  "Free food for all employees at our office canteen (all 3 times)",
  "On-time salary, 1st of every month",
  "On-time increment as per date of joining",
  "All unavailed leaves will be paid",
  "Standard working hours (no shift)",
  "Special bonus / gifts on festivals",
  "₹2,00,000 worth of mediclaim insurance for employees (non-ESIC)",
];

const careerRoles = [
  { id: 1, label: "Drafting Engineer", position: 0.6, labelPosition: "below" as const },
  { id: 2, label: "Checker", position: 18.67, labelPosition: "above" as const },
  { id: 3, label: "Modeller", position: 35.33, labelPosition: "below" as const },
  { id: 4, label: "Senior Roles", position: 52, labelPosition: "above" as const },
  { id: 5, label: "Team Leader", position: 68.67, labelPosition: "below" as const },
  { id: 6, label: "Project Leader", position: 85.33, labelPosition: "above" as const },
  { id: 7, label: "Project Manager", position: 99.6, labelPosition: "above" as const },
];

const jobRequirements = [
  { heading: "We're Hiring For", points: ["Detailers", "Jr. Modeller", "Sr. Modeller", "Jr. Checker", "Sr. Checker", "Project Lead"] },
  { heading: "Software & Standards", points: ["Tekla Structures", "AISC Professionals / Experience"] },
  { heading: "Qualification", points: ["B.E. / B.Tech Civil & Mechanical", "Diploma"] },
  { heading: "Experience", points: ["3 to 8+ years in Tekla Structures with AISC experience"] },
  { heading: "Compensation", points: ["Best salary in the industry"] },
];

/* ─────────────────────── timeline ─────────────────────── */

function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting && !isVisible) setIsVisible(true); },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const start = Date.now();
    const duration = 2000;
    let raf: number;
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  const pathD = `
    M 0 50
    C 56 -10, 111 -10, 167 50
    C 222 110, 278 110, 333 50
    C 389 -10, 444 -10, 500 50
    C 556 110, 611 110, 667 50
    C 722 -10, 778 -10, 833 50
    C 889 110, 944 110, 1000 50
  `;

  return (
    <div ref={timelineRef} className="relative py-5">
      {/* Desktop */}
      <div className="timeline-desktop relative h-[120px]">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full pointer-events-none">
          <defs>
            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0060af" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path d={pathD} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-200" />
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#progressGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: progress, opacity: progress > 0 ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {careerRoles.map((node) => {
          const done = progress * 100 >= node.position;
          const above = node.labelPosition === "above";
          return (
            <div
              key={node.id}
              className="absolute top-1/2 flex flex-col items-center"
              style={{ left: `${node.position}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className={cn("text-xs font-semibold whitespace-nowrap", above ? "pb-4" : "order-2 pt-4")}>
                {node.label}
              </div>
              <motion.div
                className={cn(
                  "relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border-[3px] bg-white transition-all duration-400",
                  above ? "order-2" : "",
                  done ? "border-success shadow-[0_0_0_4px_rgba(34,197,94,0.2)]" : "border-neutral-200 shadow-[0_0_0_4px_rgba(148,163,184,0.15)]",
                )}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
                transition={{ delay: (node.position / 100) * 0.5, duration: 0.4, ease: "easeOut" }}
              >
                <CircleCheckBig className={cn("h-[22px] w-[22px]", done ? "text-success" : "text-neutral-400")} strokeWidth={2.5} />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile — simple list */}
      <div className="timeline-mobile hidden">
        <div className="space-y-4">
          {careerRoles.map((node, i) => (
            <div key={node.id} className="flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand bg-brand-50 text-sm font-bold text-brand">
                {i + 1}
              </div>
              <div className="text-sm font-semibold text-charcoal">{node.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────── page component ─────────────────── */

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <InnerPageHero
        title="Join Our Dynamic Group"
        description="TEAM BLANCO seeks individuals who desire to grow and develop along with it. If you think you can make the cut, we have the right offer for you."
      />

      {/* ── Why Join Blanco ── */}
      <section className="section-spacing">
        <div className="container-page grid items-center gap-16 md:grid-cols-2">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">Why Join Blanco</span>
            <h2 className="mt-2 text-h2 text-charcoal">An Environment Built for Ambitious Engineers</h2>
            <p className="mt-4 text-neutral-600">
              TEAM BLANCO has created a world-class environment for ambitious engineers and professionals who are very passionate about their careers. We value our employees more than anything.
            </p>
            <p className="mt-4 text-neutral-600">
              Apart from the monetary details, what you should also consider is the career growth opportunities and the work culture at TEAM BLANCO. While we can&apos;t express it in words, it&apos;s something you have to experience by being in it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Technical Learning", "Engineering Culture", "Team Collaboration", "Career Growth", "Employee Perks"].map((tag) => (
                <span key={tag} className="rounded-pill border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand">{tag}</span>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <Image
              src="/images/employment-growth-source.webp"
              alt="Blanco Employment Growth — 2018 to 2030"
              width={600}
              height={400}
              className="w-full rounded-card bg-white p-6 shadow-xl"
            />
            <p className="mt-3 text-center text-xs text-neutral-400">
              Blanco Employment Growth — 2018 to 2030
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Career Advancement Timeline ── */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Career Advancement"
            title="Structured Growth Path"
            description="TEAM BLANCO is always open to creating opportunities to support its employees. Career advancement involves a combination of technical skills, leadership qualities, and strategic networking."
            align="center"
          />
          <div className="mt-12">
            <CareerTimeline />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-spacing">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="Employee Perks & Benefits" align="center" />
          <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <StaggerItem key={b.title} className="rounded-card border border-neutral-200 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-charcoal">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{b.desc}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>

          {/* Statutory */}
          <div className="mt-10 rounded-card border border-neutral-200 bg-white p-8">
            <h3 className="flex items-center gap-3 text-lg font-bold text-charcoal">
              <Gift className="h-6 w-6 text-brand" /> Statutory Benefits
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {statutoryBenefits.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="mt-6 rounded-card border border-neutral-200 bg-white p-8">
            <h3 className="flex items-center gap-3 text-lg font-bold text-charcoal">
              <Award className="h-6 w-6 text-brand" /> Other Benefits from the Company
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {otherBenefits.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs italic text-neutral-400">
              Note: If any employee worked on holidays, it will be considered as compensatory off on another day as needed by the employee, or it will be paid at year-end including EL &amp; CL balance leaves.
            </p>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Apply Now"
            title="Application Portal"
            description="We are always open to meeting talented engineering professionals. Submit your application below and our HR team will review it."
            align="center"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            {/* Left — Job Requirements */}
            <RevealOnScroll className="rounded-card border border-neutral-200 bg-white p-8">
              {jobRequirements.map((section, i) => (
                <div key={i} className={cn(i < jobRequirements.length - 1 && "mb-6")}>
                  <h3 className="text-lg font-bold text-charcoal">{section.heading}</h3>
                  <ul className="mt-3 space-y-2">
                    {section.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </RevealOnScroll>

            {/* Right — Form */}
            <RevealOnScroll delay={0.1} className="rounded-card border border-neutral-200 bg-white p-8">
              <JobApplicationForm openings={jobOpenings} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Contact HR ── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <RevealOnScroll>
            <span className="font-oswald text-xs font-semibold uppercase tracking-[.25em] text-brand">For More Information</span>
            <h2 className="mt-3 text-h1 text-charcoal">Get in Touch</h2>
            <p className="mx-auto mt-5 max-w-lg text-neutral-600">
              Have questions about careers, opportunities, or the application process? Our HR team is here to help.
            </p>
            <Button href="/contact" variant="primary" className="mt-8">
              Contact Us
            </Button>
            <p className="mt-10 font-oswald text-lg font-bold uppercase tracking-wider text-charcoal">
              WE WORK AS A TEAM AND WE WORK FOR A TEAM
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              We value our employees more than anything…
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
