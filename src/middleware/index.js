// eslint-disable-next-line no-unused-vars
const findOne = require('./findOne');
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  findOne(app);
};
