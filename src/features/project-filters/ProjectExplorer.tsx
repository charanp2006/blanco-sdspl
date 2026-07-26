"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import { FilterBar } from "@/components/ui/FilterBar";
import { Pagination } from "@/components/ui/Pagination";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyErrorStates";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { sectorOptions } from "@/content/projects";

const PAGE_SIZE = 6;

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [sector, setSector] = useState<string>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (sector === "all" ? projects : projects.filter((p) => p.sector === sector)),
    [projects, sector],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSectorChange = (value: string) => {
    setSector(value);
    setPage(1);
  };

  return (
    <div>
      <FilterBar options={[...sectorOptions]} active={sector} onChange={handleSectorChange} />

      {pageItems.length === 0 ? (
        <div className="mt-10">
          <EmptyState description="No projects match this filter yet — try a different sector." />
        </div>
      ) : (
        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      )}

      <div className="mt-10">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
