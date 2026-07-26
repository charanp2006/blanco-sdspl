import { cn } from "@/lib/utils";

export function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputStyles = (hasError?: boolean) =>
  cn(
    "w-full rounded-md border px-4 py-2.5 text-sm text-charcoal placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    hasError ? "border-error" : "border-neutral-200",
  );
