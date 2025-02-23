import { getSyncVariant } from "@/lib/utils/badge-variant"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"

interface SyncBadgeProps {
  sync: string
}

export function SyncBadge({ sync }: SyncBadgeProps) {
  return (
    <Badge 
      variant={getSyncVariant(sync)}
      className={cn(
        "font-medium inline-flex items-center gap-1.5",
        sync.toLowerCase() === 'in sync' && "bg-success text-white",
        sync.toLowerCase() === 'out of sync' && "bg-warning text-white",
        (sync.toLowerCase() === 'not found in s2' || 
         sync.toLowerCase() === 'not found in temptation') && "bg-error text-white"
      )}
    >
      <Image 
        src={sync.toLowerCase() === 'in sync' ? '/assets/tick.svg' : 
            sync.toLowerCase() === 'out of sync' ? '/assets/warning.svg' : 
            '/assets/error.svg'} 
        alt="" 
        className="h-3.5 w-3.5" 
        width={16}
        height={16}
      />
      {sync}
    </Badge>
  )
}
