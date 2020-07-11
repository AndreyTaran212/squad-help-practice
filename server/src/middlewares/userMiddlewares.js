const userQueries = require('../controllers/queries/userQueries');

module.exports.findUserByEmail = async (req, res, next) => {
  try {
    const { body: { email } } = req;
    req.user = await userQueries.findUser({ email });
    next();
  } catch (err) {
    next(err);
  }
};
