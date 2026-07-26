import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden p-0" hoverable>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Badge variant="neutral" className="capitalize">
          {project.sector}
        </Badge>
        <h3 className="mt-3 font-display text-h4 text-charcoal">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{project.location}</p>
      </div>
    </Card>
  );
}
