import { Search } from "lucide-react";

export function SearchInput({
  value,
  onChange,
  placeholder = "Search articles…",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-pill border border-neutral-200 py-3 pl-11 pr-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      />
    </label>
  );
}
