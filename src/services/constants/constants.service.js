// Initializes the `constants` service on path `/constants`
const createService = require('feathers-mongoose');
const createModel = require('../../models/constants.model');
const hooks = require('./constants.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const options = {
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/constants', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('constants');

  service.hooks(hooks);
};
