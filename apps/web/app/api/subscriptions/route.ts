import { NextResponse } from 'next/server';
import { stubResponse } from './stubResponse';

const STATUS_MAPPING: Record<Subscription['status'], string> = {
    ACTIVE: 'Active',
    SUSPENDED: 'Suspended',
    EXPIRED: 'Expired',
  };
  
  const SYNC_MAPPING: Record<Subscription['sync'], string> = {
    IN_SYNC: 'In sync',
    NOT_FOUND_S2: 'Not found in S2',
    NOT_FOUND_TEMPTATION: 'Not found in temptation',
    OUT_OF_SYNC: 'Out of sync',
  };  

export async function GET() {
    try {
        const mappedResponse = {
            ...stubResponse,
            subscriptions: stubResponse.subscriptions.map((subscription) => ({
                id: subscription.id,
                brand: subscription.brand,
                formula: subscription.formula,
                status: STATUS_MAPPING[subscription.status] || 'Unknown',
                sync: SYNC_MAPPING[subscription.sync] || 'Unknown'
            }))
        };

        return new NextResponse(JSON.stringify(mappedResponse), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error in GET /api/subscriptions:', error);
        return new NextResponse(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

export type Subscription = {
  id: string;
  brand: string;
  formula: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'EXPIRED';
  sync: 'IN_SYNC' | 'NOT_FOUND_S2' | 'NOT_FOUND_TEMPTATION' | 'OUT_OF_SYNC';
};

export type SubscriptionResponse = {
  source: string;
  subscriptions: Subscription[];
};

