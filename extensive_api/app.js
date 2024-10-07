require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const storyRoutes = require("./routes/storyRoutes");
const webhookHandler = require("./controller/webhookController");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: "*",
  allowedHeaders: "*",
};

app.use(cors(corsOptions));

// Webhook route with raw body middleware
app.post('/api/webhook', express.raw({ type: 'application/json' }), webhookHandler);

// Middleware for general routes (non-webhook)
app.use(bodyParser.json()); // Regular JSON body parsing for non-webhook routes

// Routes
app.use("/api", userRoutes);
app.use("/api/story", storyRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

require('./controller/cronJobs');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
