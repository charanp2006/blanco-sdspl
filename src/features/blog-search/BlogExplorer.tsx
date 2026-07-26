"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterBar } from "@/components/ui/FilterBar";
import { BlogCard } from "@/components/ui/ContentCards";
import { EmptyState } from "@/components/ui/EmptyErrorStates";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import Link from "next/link";

export function BlogExplorer({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "all" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const filterOptions = [{ label: "All Topics", value: "all" }, ...categories.map((c) => ({ label: c, value: c }))];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterBar options={filterOptions} active={category} onChange={setCategory} />
        <div className="w-full sm:w-72">
          <SearchInput value={query} onChange={setQuery} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState description="No articles match your search yet — try a different term or topic." />
        </div>
      ) : (
        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <BlogCard post={post} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      )}
    </div>
  );
}
