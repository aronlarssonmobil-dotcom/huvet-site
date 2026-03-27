import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const formData = await request.formData();
  const sessionId = formData.get('sessionId') as string;

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  const checkoutSession = await getStripe().checkout.sessions.retrieve(sessionId);

  const portalSession = await getStripe().billingPortal.sessions.create({
    customer: checkoutSession.customer as string,
    return_url: `${process.env.NEXT_PUBLIC_DOMAIN || 'https://huvet.se'}/priser`,
  });

  return NextResponse.redirect(portalSession.url, 303);
}
