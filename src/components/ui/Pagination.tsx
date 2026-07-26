import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      <button
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-full p-2 text-neutral-500 hover:bg-brand-50 hover:text-brand disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => onPageChange(page)}
          className={cn(
            "h-9 w-9 rounded-full text-sm font-semibold transition-colors",
            page === currentPage ? "bg-brand text-white" : "text-neutral-600 hover:bg-brand-50 hover:text-brand",
          )}
        >
          {page}
        </button>
      ))}

      <button
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-full p-2 text-neutral-500 hover:bg-brand-50 hover:text-brand disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}
