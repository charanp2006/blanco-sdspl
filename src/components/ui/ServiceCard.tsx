import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group flex h-full flex-col p-6">
      <h3 className="font-display text-h4 text-charcoal">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm text-neutral-600">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </Card>
  );
}
