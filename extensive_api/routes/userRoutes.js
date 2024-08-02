// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

module.exports = router;
