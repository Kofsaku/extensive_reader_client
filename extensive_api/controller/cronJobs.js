const cron = require('node-cron');
const User = require('../models/User'); // Adjust the path as necessary

// Function to reset daily limits for all users
const resetDailyLimits = async () => {
  try {
    const users = await User.find();
    for (const user of users) {
      user.dailyStoryCreated = 0;
      user.lastResetDate = Date.now(); // Update to current date
      await user.save();
    }
    console.log("Daily limits have been reset for all users.");
  } catch (error) {
    console.error("Error resetting daily limits:", error);
  }
};

// Schedule the task to run every day at midnight (00:00)
cron.schedule('0 0 * * *', () => {
  console.log('Running daily reset of limits...');
  resetDailyLimits().catch(console.error);
});
