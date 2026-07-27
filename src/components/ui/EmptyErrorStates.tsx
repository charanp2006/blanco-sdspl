import { Inbox, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EmptyState({
  title = "Nothing here yet",
  description,
}: {
  title?: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-neutral-300 py-16 text-center">
      <Inbox className="h-8 w-8 text-neutral-400" aria-hidden />
      <h3 className="text-h4 text-charcoal">{title}</h3>
      <p className="max-w-sm text-sm text-neutral-500">{description}</p>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  description,
  onRetry,
}: {
  title?: string;
  description: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-card border border-error/20 bg-error/5 py-16 text-center">
      <AlertTriangle className="h-8 w-8 text-error" aria-hidden />
      <h3 className="text-h4 text-charcoal">{title}</h3>
      <p className="max-w-sm text-sm text-neutral-500">{description}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
