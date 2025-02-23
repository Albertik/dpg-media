import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"
import { StatusBadge } from "./status-badge"
import { SyncBadge } from "./sync-badge"
import { type Subscription } from "@/app/api/subscriptions/route"

interface SubscriptionsTableProps {
  subscriptions: Subscription[]
}

export function SubscriptionsTable({ subscriptions }: SubscriptionsTableProps) {
  const tableHeaders = Object.keys(subscriptions.at(0) || {});

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((header) => (
            <TableHead className="font-medium" key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((subscription) => (
          <TableRow key={`${subscription.id}-${subscription.brand}-${subscription.formula}`}>
            <TableCell className="font-bold">{subscription.id}</TableCell>
            <TableCell>{subscription.brand}</TableCell>
            <TableCell>{subscription.formula}</TableCell>
            <TableCell>
              <StatusBadge status={subscription.status} />
            </TableCell>
            <TableCell>
              <SyncBadge sync={subscription.sync} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
