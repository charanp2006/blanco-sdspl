import { cn } from "@/lib/utils";

export function FilterBar({
  options,
  active,
  onChange,
}: {
  options: { label: string; value: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div role="group" aria-label="Filter results" className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          aria-pressed={active === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-pill border px-4 py-2 text-sm font-semibold transition-colors",
            active === option.value
              ? "border-brand bg-brand text-white"
              : "border-neutral-200 text-neutral-600 hover:border-brand hover:text-brand",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
