// webhookController.js
const Stripe = require('stripe');
const User = require('../models/User'); // Adjust the path according to your project structure

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Webhook handler
const webhookHandler = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_SECRET_KEY);
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;

      // Retrieve the user ID and plan type from the metadata
      const userId = session.metadata.userId;
      const planType = session.metadata.planType;

      // Update the user's plan in your database
      await User.findByIdAndUpdate(userId, { plan: planType, dailyStoryCreated: 0 }); // Reset count or update as needed
      break;

    // Handle other event types if necessary
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Acknowledge receipt of the event
  res.status(200).send('Received');
};

module.exports = webhookHandler;
