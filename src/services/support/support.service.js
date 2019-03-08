const createService = require('feathers-mongoose');
const SupportModel = require('../../models/support.model');
const hooks = require('./support.hooks');

module.exports = function (app) {
  const Model = SupportModel(app);
  const options = {
    Model
  };
  app.use('/support', createService(options));
  const service = app.service('/support');
  service.hooks(hooks);
};
