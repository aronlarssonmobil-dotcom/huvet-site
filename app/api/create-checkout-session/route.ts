import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const formData = await request.formData();
  const priceId = formData.get('priceId') as string;

  if (!priceId) {
    return NextResponse.json({ error: 'Price ID required' }, { status: 400 });
  }

  const session = await getStripe().checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_DOMAIN || 'https://huvet.se'}/tack?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN || 'https://huvet.se'}/priser`,
    locale: 'sv',
    allow_promotion_codes: true,
  });

  return NextResponse.redirect(session.url!, 303);
}
