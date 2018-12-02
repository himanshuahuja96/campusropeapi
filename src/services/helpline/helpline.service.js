// Initializes the `helpline` service on path `/helpline`
const createService = require('feathers-mongoose');
const createModel = require('../../models/helpline.model');
const hooks = require('./helpline.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/helpline', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('helpline');

  service.hooks(hooks);
};
