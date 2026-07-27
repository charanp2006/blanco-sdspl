import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "structural-steel-detailing",
    name: "Structural Steel Detailing",
    shortDescription:
      "Shop and erection drawings produced in Tekla Structures, following AISC standards.",
    overview:
      "Structural steel detailing covers the production of shop drawings, erection drawings, and associated documentation from structural design drawings. At Blanco, this work is produced in Tekla Structures and checked against AISC provisions.",
    process: [
      { step: "Drawing Review", description: "Structural design drawings and project specifications are reviewed for scope and requirements." },
      { step: "3D Modelling", description: "A structural steel model is built in Tekla Structures, including connections and embeds." },
      { step: "Shop Drawings", description: "Piece-by-piece fabrication drawings are generated from the model." },
      { step: "Erection Drawings", description: "Erection plans and elevations are produced for field use." },
      { step: "QC & Checking", description: "An independent checking department reviews all drawings for accuracy before issue." },
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
          "Both are available — connection design support (via RISA/RAM/IDEA StatiCa) alongside full Tekla-based detailing, depending on the project scope.",
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
    shortDescription: "Connection engineering and AISC code-checking integrated into the detailing workflow.",
    overview:
      "Connection design involves sizing steel connections and verifying them against AISC codes. At Blanco, this work is performed alongside detailing so that geometry, capacity, and drawings remain consistent.",
    process: [
      { step: "Load Review", description: "Reaction and loading data are reviewed against the design drawings." },
      { step: "Connection Sizing", description: "Connections are sized and analysed in IDEA StatiCa / RISA / RAM." },
      { step: "AISC Code Check", description: "Each connection is verified against AISC provisions." },
      { step: "Model Integration", description: "Final connection geometry is built into the Tekla model." },
    ],
    deliverables: ["Connection design calculations", "AISC code-check reports", "Integrated Tekla connections"],
    benefits: ["Geometry and capacity handled in one workflow", "Reduced RFIs during fabrication"],
    softwareUsed: ["idea-statica", "risa", "ram", "tekla-structures"],
    faqs: [
      {
        question: "Which code do you design to?",
        answer: "AISC (American Institute of Steel Construction) provisions.",
      },
    ],
    relatedServices: ["structural-steel-detailing", "tekla-modelling"],
  },
  {
    slug: "tekla-modelling",
    name: "Tekla Modelling",
    shortDescription: "3D structural steel models built in Tekla Structures for fabrication and erection.",
    overview:
      "Tekla Structures modelling produces detailed 3D models of structural steel framing. These models can serve as the basis for drawing generation, clash coordination, or as standalone deliverables.",
    process: [
      { step: "Model Setup", description: "Grids, levels, and project standards are configured in Tekla." },
      { step: "Structural Modelling", description: "Primary and secondary steel members are modelled to fabrication tolerance." },
      { step: "Clash Coordination", description: "The model is checked against architectural/MEP references where available." },
      { step: "Deliverable Export", description: "The model is exported in native and IFC formats." },
    ],
    deliverables: ["Tekla 3D model", "IFC export", "Clash/coordination report"],
    benefits: ["Model-based accuracy", "Foundation for downstream drawing generation", "Tekla-certified modelling team"],
    softwareUsed: ["tekla-structures"],
    faqs: [
      {
        question: "Can you work from an existing Tekla model?",
        answer: "Yes — existing Tekla models can be picked up, extended, or corrected mid-project.",
      },
    ],
    relatedServices: ["structural-steel-detailing", "material-takeoffs"],
  },
  {
    slug: "material-takeoffs",
    name: "Material Take-offs",
    shortDescription: "Bolt lists, BOMs, and BOQs generated from the detailed Tekla model.",
    overview:
      "Material take-offs are extracted directly from the Tekla model, producing quantities for bolts, plates, and members that correspond to the detailed drawings.",
    process: [
      { step: "Model Finalization", description: "Take-offs are pulled from a checked and finalized model." },
      { step: "Quantity Extraction", description: "Bolts, plates, and members are extracted by piece mark." },
      { step: "Report Formatting", description: "Quantities are delivered in the required BOM/BOQ format." },
    ],
    deliverables: ["Bolt lists", "Bill of materials (BOM)", "Bill of quantities (BOQ)"],
    benefits: ["Model-accurate quantities", "Consistent with fabrication drawings"],
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
    shortDescription: "2D drafting and documentation in AutoCAD for shop drawings and layout plans.",
    overview:
      "Standalone 2D drafting in AutoCAD for shop drawings, layout plans, and related documentation — available as a support service independent of full 3D detailing.",
    process: [
      { step: "Reference Review", description: "Source drawings and sketches are reviewed." },
      { step: "Drafting", description: "Drawings are produced to the required CAD standards." },
      { step: "Checking", description: "Independent review is performed before issue." },
    ],
    deliverables: ["AutoCAD drawing sets (DWG/PDF)"],
    benefits: ["Available as a standalone service", "Suitable for smaller or drawing-only scopes"],
    softwareUsed: ["autocad"],
    faqs: [
      {
        question: "Is this available independently of Tekla-based detailing?",
        answer: "Yes — AutoCAD drafting support can be engaged on its own.",
      },
    ],
    relatedServices: ["structural-steel-detailing"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
