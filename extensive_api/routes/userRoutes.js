// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Register a new user
router.post('/register', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const newUser = new User({ name, email, password });
		await newUser.save();
		res.status(201).send('User registered successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
});

// Login a user
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).send('Invalid email or password');
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).send('Invalid email or password');
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Get all users
router.get('/users', async (req, res) => {
    try {
			const users = await User.find();
			res.status(200).json(users);
    } catch (error) {
			res.status(500).send(error.message);
    }
});

router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Using the id from the decoded token
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user information' });
  }
});

router.post('/google-auth', async (req, res) => {
  try {
		console.log("=====================")
    const { name, email } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        name,
        email,
        googleId: email, // Using Google email as ID for simplicity
        auth_provider: 'google',
      });

      await user.save();
    }

    // Generate JWT token for the user
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // Return the JWT token to the frontend
    res.status(200).json({ token });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      res.status(500).send({ message: 'Error saving user', error: error.message });
    }
  }
});

router.post('/select-plan', auth, async (req, res) => {
  const { plan } = req.body; // The plan the user wants to select

  if (!['Free', 'Standard', 'Pro'].includes(plan)) {
    return res.status(400).send('Invalid plan selected');
  }

  try {
    const user = await User.findById(req.user.id);
    user.plan = plan;
    user.dailySentencesCreated = 0; // Reset sentence count on plan change
    await user.save();
    res.status(200).send(`Plan updated to ${plan}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
