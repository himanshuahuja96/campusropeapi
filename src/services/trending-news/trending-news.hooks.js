const { authenticate } = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');


const newsClientSchema = {
  include: {
    service: 'news-client',
    nameAs: 'newsClient',
    parentField: 'newsClient',
    childField: '_id'
  }
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      populate({schema: newsClientSchema})
    ],
    get: [
      populate({schema: newsClientSchema})
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
