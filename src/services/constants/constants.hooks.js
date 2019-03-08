const { authenticate } = require('@feathersjs/authentication').hooks;
const sendConstantsData = require('./hooks/send-constants-data');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ sendConstantsData() ],
    find: [],
    get: [],
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
