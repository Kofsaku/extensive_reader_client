import React from "react";
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Card = ({ plan }) => {
  const handleCheckout = async (planType) => {
    const response = await fetch('/api/stripeCheckout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planType }), // Send the plan type (free, standard, pro)
    });

    const session = await response.json();

    const stripe = await stripePromise; // Load Stripe.js
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,  // Redirect the user to the Stripe Checkout page
    });

    if (error) {
      console.error("Stripe Checkout error:", error.message);
    }
  };

  return (
    <>
      <div
        className="w-[300px] h-[400px] mb-2 cursor-pointer flex flex-col items-center rounded-[16px] mt-10 relative"
        style={{ boxShadow: '0px 0px 8px 0px rgb(176, 109, 185)' }}
      >
        <div>
          <img
            src="images/ai-power.jpeg"
            alt="Card image"
            width={250}
            height={250}
            className="mt-4 rounded-[16px]"
          />
        </div>
        <div className="mt-2 flex flex-row-reverse gap-3 items-center absolute right-3 bottom-4">
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCheckout(plan.name); // Pass the plan name (free, standard, pro)
              }}
              className="w-[80px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none text-[10px] font-bold"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-4 text-center text-[18px] w-[80%]">{plan.name}</div>
      </div>
    </>
  );
};

export default Card;
