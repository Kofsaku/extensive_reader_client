const User = require('../models/User');

const checkPlanLimit = async (req, res, next) => {
  const id = req.user.id; // Assuming you have user data from auth middleware
  
  const user = await User.findById(id);

  if (!user) {
    return res.status(401).send('User not authenticated');
  }
  console.log("useruseruseruseruser", user)
  // Check if user has a valid plan
  if (!user.plan || !['Free Plan', 'Standard Plan', 'Pro Plan'].includes(user.plan)) {
    return res.status(400).send('Invalid plan');
  }
  console.log("useruseruseruseruseruser", user)
  // Check daily limits based on user plan
  switch (user.plan) {
    case 'Free Plan':
      if (user.dailyStoryCreated >= 3) {
        return res.status(403).send('Daily limit reached for Free Plan');
      }
      break;
    case 'Standard Plan':
      if (user.dailyStoryCreated >= 10) {
        return res.status(403).send('Daily limit reached for Standard Plan');
      }
      break;
    case 'Pro Plan':
      // No limit for Pro Plan
      break;
  }

  next();
};

module.exports = checkPlanLimit;
