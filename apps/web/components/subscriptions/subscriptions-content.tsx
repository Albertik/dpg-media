'use client';

import { Button } from "@workspace/ui/components/button";
import { SubscriptionsTable, SourceInfo } from "@/components/subscriptions";
import type { SubscriptionResponse } from "../../app/api/subscriptions/route";

export function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p>Fetching subscriptions</p>
      </div>
    </div>
  )
}

export function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <p>No subscriptions found</p>
        <Button onClick={() => window.location.reload()}>Refresh</Button>
      </div>
    </div>
  )
}

export function ErrorState({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Failed to load subscriptions</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    </div>
  )
}

export function SubscriptionsContent({ data }: { data: SubscriptionResponse }) {
  if (!data?.subscriptions?.length) {
    return <EmptyState />
  }

  return (
    <div className="flex items-center justify-center min-h-svh p-6">
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold tracking-tight px-1">Subscriptions</h1>
          <SubscriptionsTable subscriptions={data.subscriptions} />
          <SourceInfo source={data.source} />
        </div>
      </div>
    </div>
  );
}
