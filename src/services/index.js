const apiUsers = require('./api/users/users.service.js');
const apiPosts = require('./api/posts/posts.service.js');
const apiComments = require('./api/comments/comments.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(apiUsers);
  app.configure(apiPosts);
  app.configure(apiComments);
};
