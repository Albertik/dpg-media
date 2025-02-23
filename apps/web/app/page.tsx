import { Suspense } from 'react';
import { SubscriptionResponse } from "./api/subscriptions/route";
import { BASE_URL } from "@/lib/constants";
import { LoadingState, SubscriptionsContent, ErrorState } from "@/components/subscriptions/";

async function getSubscriptions(): Promise<SubscriptionResponse> {
  try {
    const res = await fetch(`${BASE_URL}/api/subscriptions`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch subscriptions: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
}

export default async function Page() {
  try {
    const data = await getSubscriptions();
    return (
      <Suspense fallback={<LoadingState />}>
        <SubscriptionsContent data={data} />
      </Suspense>
    );
  } catch (error) {
    return <ErrorState error={error as Error} />;
  }
}
