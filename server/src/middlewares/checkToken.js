const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const TokenError = require('../errors/TokenError');
import userQueries from '../controllers/queries/userQueries';

module.exports.checkAuth = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    return next(new TokenError('need token'));
  }
  try {
    const tokenData = jwt.verify(accessToken, CONSTANTS.JWT_SECRET);
    const foundUser = await userQueries.findUser({ id: tokenData.userId });
    const data = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      role: foundUser.role,
      id: foundUser.id,
      avatar: foundUser.avatar,
      displayName: foundUser.displayName,
      balance: foundUser.balance,
      email: foundUser.email,
    };
    if (tokenData.hashPass) {
      console.log('begin');
      const accessToken = jwt.sign({
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        role: foundUser.role,
        id: foundUser.id,
        avatar: foundUser.avatar,
        displayName: foundUser.displayName,
        balance: foundUser.balance,
        email: foundUser.email,
      }, CONSTANTS.JWT_SECRET, { expressIn: CONSTANTS.ACCESS_TOKEN_TIME });
      await userQueries.updateUser({ password: tokenData.hashPass, accessToken: accessToken }, tokenData.userId);
      data.token = accessToken;
    }
    console.log('end');
    res.send(data);
  } catch (err) {
    next(new TokenError());
  }
};

module.exports.checkToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    return next(new TokenError('need token'));
  }
  try {
    req.tokenData = jwt.verify(accessToken, CONSTANTS.JWT_SECRET);
    req.body.email = req.tokenData.email;
    next();
  } catch (err) {
    next(new TokenError());
  }
};

module.exports.createRecoverPassToken = async (req, res, next) => {
  try {
    const { body: { email }, hashPass } = req;

    req.recoverPassToken = await jwt.sign({
      email,
      hashPass,
    }, CONSTANTS.JWT_SECRET, {
      expiresIn: CONSTANTS.ACCESS_TOKEN_TIME,
    });

    next();
  } catch (err) {
    next(err);
  }
};

module.exports.checkRecoverToken = async (req, res, next) => {
  try {
    console.log('111111111111111111111111111111111111111111111111111');
    const { body: { token } } = req;
    console.log(token);
    req.userData = await jwt.verify(token, CONSTANTS.JWT_SECRET);
    console.log(req.userData);
    next();
  } catch (err) {
    next(err);
  }
};
