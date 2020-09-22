const { withResult } = require('feathers-fletching');
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;
const { logSession } = require('../../../hooks/session');

const withResults = withResult({
  posts: async (user, context) => {
    const { data } = await context.app.service('api/posts').find({
      query: { user_id: user._id }
    });
    return data;
  }
});

module.exports = {
  before: {
    all: [logSession],
    find: [],
    get: [],
    create: [ hashPassword('password') ],
    update: [ hashPassword('password')],
    patch: [ hashPassword('password')],
    remove: []
  },

  after: {
    all: [
      withResults,
      logSession,
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
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
