const db = require('../../models');
const NotFound = require('../../errors/UserNotFoundError');
const ServerError = require('../../errors/ServerError');

module.exports.tokenCreation = async (data) => {
  const newToken = await db.Token.create(data);
  if (!newToken) {
    throw new ServerError('server error on token creation');
  } else {
    return newToken.get({ plain: true });
  }
};

module.exports.findToken = async (predicate, transaction) => {
  const result = await db.Token.findOne({ where: predicate, transaction });
  if (!result) {
    throw new NotFound('token didn`t exist');
  } else {
    return result.get({ plain: true });
  }
};

module.exports.updateToken = async (data, tokenId, transaction) => {
  const [updatedCount, [updatedToken]] = await db.Token.update(data,
    { where: { id: tokenId }, returning: true, transaction });
  if (updatedCount !== 1) {
    throw new ServerError('cannot update token');
  }
  return updatedToken.dataValues;
};
