import type { SoftwareTool } from "@/types";
import { images } from "@/constants/images";

export const softwareTools: SoftwareTool[] = [
  {
    slug: "tekla-structures",
    name: "Tekla Structures",
    logo: images.software.tekla,
    role: "Primary 3D detailing & modelling platform — used on every project",
  },
  {
    slug: "autocad",
    name: "AutoCAD",
    logo: images.software.autocad,
    role: "2D shop and erection drawing production",
  },
  {
    slug: "risa",
    name: "RISA",
    logo: images.software.risa,
    role: "Structural analysis support for connection design",
  },
  {
    slug: "ram",
    name: "RAM",
    logo: images.software.ram,
    role: "Structural analysis support for connection design",
  },
  {
    slug: "idea-statica",
    name: "IDEA StatiCa",
    logo: images.software.ideaStatica,
    role: "Connection-level code checks (AISC)",
  },
];
