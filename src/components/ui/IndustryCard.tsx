"use client";

import Image from "next/image";
import { images } from "@/constants/images";

interface IndustryCardProps {
  name: string;
  description: string;
  imageKey: keyof typeof images.industries;
}

export function IndustryCard({ name, description, imageKey }: IndustryCardProps) {
  const imgSrc = images.industries[imageKey];

  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-card">
      <Image
        src={imgSrc}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* always-visible bottom label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-6 transition-all duration-500 ease-out group-hover:opacity-0">
        <span className="font-oswald text-xs font-medium uppercase tracking-widest text-brand-light">
          Industry
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
      </div>

      {/* hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-center bg-charcoal/80 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-out group-hover:opacity-100">
        <span className="font-oswald text-xs font-medium uppercase tracking-widest text-brand-light">
          Industry
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-300">{description}</p>
      </div>
    </div>
  );
}
