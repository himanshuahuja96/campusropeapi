// Initializes the `news-client` service on path `/news-client`
const createService = require('feathers-mongoose');
const createModel = require('../../models/news-client.model');
const hooks = require('./news-client.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    Model
  };

  // Initialize our service with any options it requires
  app.use('/news-client', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('news-client');

  service.hooks(hooks);
};
