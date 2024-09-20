const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // Leave this empty for Google OAuth users
  },
  googleId: {
    type: String, // Store the Google ID (typically the email)
  },
  auth_provider: {
    type: String,
    enum: ['google', 'credentials'],
    default: 'credentials',
  },
  image: {
    type: String, // Store user's Google profile picture
  },
});

userSchema.pre('save', async function (next) {
  // Only hash the password if it's provided (for credential-based users)
  if (this.password && (this.isModified('password') || this.isNew)) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
