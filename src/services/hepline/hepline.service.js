// Initializes the `hepline` service on path `/hepline`
const createService = require('feathers-mongoose');
const createModel = require('../../models/hepline.model');
const hooks = require('./hepline.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hepline', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('hepline');

  service.hooks(hooks);
};
