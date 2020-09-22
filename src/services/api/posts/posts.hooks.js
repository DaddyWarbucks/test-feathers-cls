const { withResult } = require('feathers-fletching');
const { logSession } = require('../../../hooks/session');

const withResults = withResult({
  comments: async (post, context) => {
    const { data } = await context.app.service('api/comments').find({
      query: { user_id: post.user_id }
    });
    return data;
  }
});


module.exports = {
  before: {
    all: [logSession],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [withResults, logSession],
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
