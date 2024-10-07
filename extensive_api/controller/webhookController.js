const Stripe = require('stripe');
const User = require('../models/User'); // Adjust the path according to your project structure
const jwt = require('jsonwebtoken'); 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Webhook handler
const webhookHandler = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // Use req.body as raw buffer here
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;

      // Retrieve the authToken and planType from the metadata
      const authToken = session.metadata.authToken;
      const planType = session.metadata.planType;

      // Decode the authToken to get the userId
      let decoded;
      try {
        decoded = jwt.verify(authToken, process.env.JWT_SECRET); // Ensure you have the correct JWT secret in your env
      } catch (err) {
        console.error("Invalid auth token:", err.message);
        return res.status(400).send("Invalid auth token");
      }

      const userId = decoded.id; // Assuming the userId is stored in the 'id' field of the token

      // Update the user's plan in your database
      try {
        await User.findByIdAndUpdate(userId, { plan: planType, dailyStoryCreated: 0 }); // Reset count or update as needed
        console.log(`User ${userId} plan updated to ${planType}`);
      } catch (err) {
        console.error(`Error updating user plan: ${err.message}`);
        return res.status(500).send("Error updating user plan");
      }

      break;

    // Handle other event types if necessary
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Acknowledge receipt of the event
  res.status(200).send('Received');
};

module.exports = webhookHandler;
