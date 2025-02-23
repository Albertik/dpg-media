import { getStatusVariant } from "@/lib/utils/badge-variant"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge 
      variant={getStatusVariant(status)}
      className={cn(
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
