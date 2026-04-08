import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey || stripeKey === "sk_test_REPLACE_WITH_YOUR_KEY") {
      return NextResponse.json(
        { error: "Stripe is not configured yet. Please add your Stripe API key." },
        { status: 500 }
      );
    }

    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(stripeKey);

    const { sessionType, clientName, clientEmail } = await request.json();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: clientEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Session Deposit - ${sessionType}`,
              description: `Booking deposit for ${sessionType} with Divine Design Co. Client: ${clientName}`,
            },
            unit_amount: 20000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/booking-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#packages`,
      metadata: { clientName, clientEmail, sessionType },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
