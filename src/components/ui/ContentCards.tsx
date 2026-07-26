import Image from "next/image";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { BlogPost, Testimonial } from "@/types";

export function TeamCard({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo: string;
}) {
  return (
    <Card className="overflow-hidden p-0 text-center">
      <div className="relative aspect-square bg-neutral-100">
        <Image src={photo} alt={name} fill sizes="240px" className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-charcoal">{name}</h3>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
    </Card>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-[16/10] bg-neutral-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{post.category}</p>
        <h3 className="mt-2 font-display text-h4 text-charcoal">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{post.excerpt}</p>
      </div>
    </Card>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col p-6" hoverable={false}>
      <Quote className="h-6 w-6 text-accent" aria-hidden />
      <p className="mt-4 flex-1 text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5 border-t border-neutral-100 pt-4">
        <p className="font-display text-sm font-semibold text-charcoal">{testimonial.author}</p>
        <p className="text-xs text-neutral-500">
          {testimonial.role}
          {testimonial.company ? `, ${testimonial.company}` : ""}
        </p>
      </div>
    </Card>
  );
}
