const User = require('../models/user');

// Obsługa endpointu obecnego użytkownika
exports.getCurrent = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
