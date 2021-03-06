const { authenticate } = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');


const userSchema = {
  include: {
    service: 'users',
    nameAs: 'createdBy',
    parentField: 'createdBy',
    childField: '_id',
    query: {
      $limit: 1,
      $select: ['_id', 'name', 'picture']
    }
  }
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt') ],
    update: [authenticate('jwt') ],
    patch: [authenticate('jwt') ],
    remove: [authenticate('jwt') ]
  },

  after: {
    all: [
      populate({schema: userSchema})
    ],
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
