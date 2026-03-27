import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

const PLANS: Record<string, { priceAmount: number; name: string }> = {
  premium: { priceAmount: 9900, name: 'Huvet Premium' },
  garanti: { priceAmount: 24900, name: 'Huvet Garanti' },
};

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();

    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: 'Ogiltig plan' }, { status: 400 });
    }

    const { priceAmount, name } = PLANS[plan];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'sek',
            product_data: {
              name,
              description:
                plan === 'garanti'
                  ? 'Alla frågor, övningsprov, svaghetsanalys + klargaranti'
                  : 'Alla frågor, övningsprov och svaghetsanalys',
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/betalning/tack?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/priser`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'Kunde inte skapa betalningssession' },
      { status: 500 }
    );
  }
}
