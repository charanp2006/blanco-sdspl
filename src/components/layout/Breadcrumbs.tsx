import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schemaItems = [
    { name: "Home", url: "/" },
    ...items.map((item) => ({ name: item.label, url: item.href ?? "" })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="container-page py-4">
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-brand">
            <Home className="h-3.5 w-3.5" aria-hidden />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-charcoal">
                {item.label}
              </span>
            )}
            {index !== items.length - 1 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
