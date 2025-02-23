import { getStatusVariant } from "@/lib/utils/badge-variant"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ className, status }: StatusBadgeProps) {
  return (
    <Badge
      variant={getStatusVariant(status)}
      className={cn(
        className,
        "font-medium",
        status.toLowerCase() === 'active' && "bg-success text-white",
        status.toLowerCase() === 'suspended' && "bg-warning text-white",
        status.toLowerCase() === 'expired' && "bg-error text-white"
      )}
    >
      {status}
    </Badge>
  )
}
