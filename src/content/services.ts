import type { Service } from "@/types";

// SCOPE CORRECTION (post-Phase-1 client feedback):
// Blanco's business is structural STEEL DETAILING only — not a multi-discipline
// BIM/design practice. Every service below is a facet of that one discipline,
// built around Tekla Structures and AISC compliance. The Phase 1 document's
// broader 7-service list (which included Revit Modelling, PEB, Precast, R&D)
// has been narrowed here; Phase 1 itself is left unedited per instruction.

export const services: Service[] = [
  {
    slug: "structural-steel-detailing",
    name: "Structural Steel Detailing",
    shortDescription:
      "AISC-compliant shop and erection drawings built in Tekla Structures for fabricators and contractors.",
    overview:
      "End-to-end structural steel detailing for commercial, industrial, and institutional projects — from IFC drawings through fabrication-ready shop and erection packages, produced to AISC standards for USA clients.",
    process: [
      { step: "Contract Review", description: "Scope, schedule, and connection design responsibility confirmed against project specs." },
      { step: "3D Modelling", description: "Full structural model built in Tekla Structures, including connections and embeds." },
      { step: "Shop Drawings", description: "Piece-by-piece fabrication drawings generated and checked." },
      { step: "Erection Drawings", description: "Field-ready erection plans and elevations issued." },
      { step: "QC & Checking", description: "Independent checking department reviews for accuracy before release." },
    ],
    deliverables: [
      "Tekla 3D model (.tekla / IFC)",
      "Shop drawings (PDF/DWG)",
      "Erection drawings",
      "Bolt lists & material take-offs",
    ],
    benefits: [
      "AISC-compliant detailing",
      "Dedicated checking department for every drawing set",
      "Experience across 1,000+ completed projects",
      "USA time-zone-aligned turnaround",
    ],
    softwareUsed: ["tekla-structures", "autocad"],
    faqs: [
      {
        question: "Do you provide connection design or only detailing?",
        answer:
          "We provide both — connection design support (via RISA/RAM/IDEA StatiCa) alongside full Tekla-based detailing, depending on the scope your project requires.",
      },
      {
        question: "What formats do you deliver models and drawings in?",
        answer: "Tekla native files, IFC for interoperability, and PDF/DWG drawing sets.",
      },
    ],
    relatedServices: ["connection-design", "tekla-modelling"],
  },
  {
    slug: "connection-design",
    name: "Connection Design",
    shortDescription: "AISC-code-checked connection engineering, integrated directly into the detailing workflow.",
    overview:
      "Connection design and code-checking performed alongside detailing — not handed off separately — so geometry, capacity, and drawings stay in sync from model to shop floor.",
    process: [
      { step: "Load Review", description: "Reaction/loading data reviewed against the design drawings." },
      { step: "Connection Sizing", description: "Connections sized and checked in IDEA StatiCa / RISA / RAM." },
      { step: "AISC Code Check", description: "Every connection verified against AISC provisions." },
      { step: "Model Integration", description: "Final connection geometry built into the Tekla model." },
    ],
    deliverables: ["Connection design calculations", "AISC code-check reports", "Integrated Tekla connections"],
    benefits: ["Single point of accountability for geometry + capacity", "Reduced RFIs at fabrication stage"],
    softwareUsed: ["idea-statica", "risa", "ram", "tekla-structures"],
    faqs: [
      {
        question: "Which code do you design to?",
        answer: "AISC (American Institute of Steel Construction) provisions, as required by our USA client base.",
      },
    ],
    relatedServices: ["structural-steel-detailing", "tekla-modelling"],
  },
  {
    slug: "tekla-modelling",
    name: "Tekla Modelling",
    shortDescription: "High-detail 3D structural steel models built for clash-free fabrication and erection.",
    overview:
      "Dedicated Tekla Structures modelling — from IFC coordination models through fully detailed, fabrication-ready structural models — for detailing teams, GCs, and fabricators who need the model itself as the deliverable.",
    process: [
      { step: "Model Setup", description: "Grids, levels, and project standards configured in Tekla." },
      { step: "Structural Modelling", description: "Primary and secondary steel modelled to fabrication tolerance." },
      { step: "Clash Coordination", description: "Model checked against architectural/MEP references where supplied." },
      { step: "Deliverable Export", description: "Model exported in native and IFC formats." },
    ],
    deliverables: ["Tekla 3D model", "IFC export", "Clash/coordination report"],
    benefits: ["Model-first accuracy", "Faster downstream drawing generation", "Tekla-certified modelling team"],
    softwareUsed: ["tekla-structures"],
    faqs: [
      {
        question: "Can you work from our existing Tekla model?",
        answer: "Yes — we regularly pick up, extend, and correct existing Tekla models mid-project.",
      },
    ],
    relatedServices: ["structural-steel-detailing", "material-takeoffs"],
  },
  {
    slug: "material-takeoffs",
    name: "Material Take-offs",
    shortDescription: "Accurate bolt lists, BOMs, and BOQs generated directly from the detailed Tekla model.",
    overview:
      "Material take-offs generated directly from the Tekla model — not estimated separately — so procurement and fabrication quantities match the drawings exactly.",
    process: [
      { step: "Model Finalization", description: "Take-offs pulled only from a checked, finalized model." },
      { step: "Quantity Extraction", description: "Bolts, plates, and members extracted by piece mark." },
      { step: "Report Formatting", description: "Delivered in the client's preferred BOM/BOQ format." },
    ],
    deliverables: ["Bolt lists", "Bill of materials (BOM)", "Bill of quantities (BOQ)"],
    benefits: ["Model-accurate quantities", "Reduced fabrication over/under-ordering"],
    softwareUsed: ["tekla-structures"],
    faqs: [
      {
        question: "Can take-offs be split by phase or package?",
        answer: "Yes — quantities can be broken out by erection sequence, package, or shipment.",
      },
    ],
    relatedServices: ["tekla-modelling", "structural-steel-detailing"],
  },
  {
    slug: "autocad-drafting-support",
    name: "AutoCAD Drafting Support",
    shortDescription: "2D drafting and documentation support for teams working outside a full Tekla workflow.",
    overview:
      "Standalone 2D AutoCAD drafting for shop drawings, layout plans, and documentation — for clients who need drafting support without a full 3D detailing engagement.",
    process: [
      { step: "Reference Review", description: "Source drawings/sketches reviewed for intent." },
      { step: "Drafting", description: "Drawings produced to client CAD standards." },
      { step: "Checking", description: "Independent review before issue." },
    ],
    deliverables: ["AutoCAD drawing sets (DWG/PDF)"],
    benefits: ["Flexible, drawing-only engagements", "Fast turnaround for smaller scopes"],
    softwareUsed: ["autocad"],
    faqs: [
      {
        question: "Is this available as a standalone service?",
        answer: "Yes — this can be engaged independently of full Tekla-based detailing.",
      },
    ],
    relatedServices: ["structural-steel-detailing"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
