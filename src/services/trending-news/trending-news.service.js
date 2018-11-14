// Initializes the `trending-news` service on path `/trending-news`
const createService = require('feathers-mongoose');
const createModel = require('../../models/trending-news.model');
const hooks = require('./trending-news.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trending-news', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('trending-news');

  service.hooks(hooks);
};
