export const dynamic = 'force-dynamic';

import { Button } from "@workspace/ui/components/button"
import { SubscriptionResponse } from "./api/subscriptions/route";
import { BASE_URL } from "@/lib/constants";
import { SubscriptionsTable, SourceInfo } from "@/components/subscriptions";

async function getSubscriptions(): Promise<SubscriptionResponse> {
  try {
    console.log('Fetching subscriptions from:', `${BASE_URL}/api/subscriptions`);
    const res = await fetch(`${BASE_URL}/api/subscriptions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error('Failed to fetch subscriptions:', res.status, res.statusText);
      throw new Error(`Failed to fetch subscriptions: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    console.log('Subscriptions fetched successfully');
    return data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
}

function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <p>No subscriptions found</p>
        <Button>Refresh</Button>
      </div>
    </div>
  )
}

export default async function Page() {
  const data = await getSubscriptions();

  if (!data.subscriptions?.length) {
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
