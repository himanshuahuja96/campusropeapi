// Initializes the `ngo` service on path `/ngo`
const createService = require('feathers-mongoose');
const createModel = require('../../models/ngo.model');
const hooks = require('./ngo.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ngo', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('ngo');

  service.hooks(hooks);
};
