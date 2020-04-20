const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.offersMiddleware = async (req, res, next) => {
    try {
        const option = {
            fileName: {
                [db.Sequelize.Op]: null,
            }
        };
        if ((req.body.time) && (!isNaN(new Date(req.body.time)))) {
            option.timestamp = {
                [db.Sequelize.Op.gte]: new Date(req.body.time)
            }
        }
        req.body.option = option;
        next();
    } catch (e) {
        next(new ServerError());
    }
};