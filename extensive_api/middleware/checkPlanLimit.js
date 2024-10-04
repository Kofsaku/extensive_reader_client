const checkPlanLimit = (req, res, next) => {
  const user = req.user; // Assuming you have user data from auth middleware

  if (!user) {
    return res.status(401).send('User not authenticated');
  }

  // Check if user has a valid plan
  if (!user.plan || !['Free', 'Standard', 'Pro'].includes(user.plan)) {
    return res.status(400).send('Invalid plan');
  }

  // Check daily limits based on user plan
  switch (user.plan) {
    case 'Free':
      if (user.dailyStoryCreated >= 3) {
        return res.status(403).send('Daily limit reached for Free Plan');
      }
      break;
    case 'Standard':
      if (user.dailyStoryCreated >= 10) {
        return res.status(403).send('Daily limit reached for Standard Plan');
      }
      break;
    case 'Pro':
      // No limit for Pro Plan
      break;
  }

  next();
};

module.exports = checkPlanLimit;
