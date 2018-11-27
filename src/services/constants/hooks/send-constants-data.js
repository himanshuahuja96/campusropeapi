
const CONSTANTS = require('../constants-data');

module.exports = () =>  (context) => {
  context.result = CONSTANTS;
  return context;
};