import Stripe from 'stripe';
import cookie from "cookie";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { planType } = await req.json();
    console.log("planTypeplanType", planType)
    // Define Price IDs for each plan
    let priceId;
    switch (planType) {
      case 'Free Plan':
        priceId = 'price_1Q5lkMEC44bbxszX8RedCc04';  // Your actual Free Plan Price ID
        break;
      case 'Standard Plan': 
        priceId = 'price_1Q5lkMEC44bbxszXtYKYg6Cf';  // Your actual Standard Plan Price ID
        break;
      case 'Pro Plan':
        priceId = 'price_1Q5llJEC44bbxszXwENv5TCr';  // Your actual Pro Plan Price ID
        break;
      default:
        return new Response(JSON.stringify({ error: 'Invalid plan type' }), { status: 400 });
    }
    console.log("priceIdpriceIdpriceId", priceId)
    const cookies = cookie.parse(req.headers.get("cookie") || "");
    const authToken = cookies.authToken;
    // Create Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/payments`,
      cancel_url: `${req.headers.get('origin')}/payments`,
      metadata: {
        // You can include additional information, such as user ID or plan type, if needed
        authToken: authToken, // Assuming user ID is available in the request
        planType,
      },
    });

    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
