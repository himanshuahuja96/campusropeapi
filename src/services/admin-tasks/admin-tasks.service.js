// Initializes the `admin-tasks` service on path `/admin-tasks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/admin-tasks.model');
const hooks = require('./admin-tasks.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    Model
  };

  // Initialize our service with any options it requires
  app.use('/admin-tasks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('admin-tasks');

  service.hooks(hooks);
};
