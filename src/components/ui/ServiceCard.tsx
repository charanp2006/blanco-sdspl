"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { images } from "@/constants/images";

const serviceImageMap: Record<string, string> = {
  "structural-steel-detailing": images.services.structuralSteel,
  "connection-design": images.services.connectionDesign,
  "tekla-modelling": images.services.teklaModelling,
  "material-takeoffs": images.services.materialTakeoffs,
  "autocad-drafting-support": images.services.autocadDrafting,
};

export function ServiceCard({ service }: { service: Service }) {
  const imgSrc = serviceImageMap[service.slug] ?? images.services.structuralSteel;

  return (
    <div className="group h-[320px] w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* ── Front ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
          <div className="relative h-full w-full overflow-hidden rounded-card">
            <Image
              src={imgSrc}
              alt={service.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="font-oswald text-xs font-medium uppercase tracking-widest text-brand-light">
                Our Service
              </span>
              <h3 className="mt-1 text-h4 text-white">{service.name}</h3>
            </div>
          </div>
        </div>

        {/* ── Back ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] [webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full w-full flex-col rounded-card bg-white p-6 shadow-soft">
            <span className="font-oswald text-xs font-medium uppercase tracking-widest text-brand">
              Our Service
            </span>
            <h3 className="mt-1 text-h4 text-charcoal">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
              {service.shortDescription}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
