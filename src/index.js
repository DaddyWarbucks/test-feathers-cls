/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', reason => {
  logger.error(
    `Unhandled Promise Rejection at: ${JSON.stringify(
      reason.toJSON ? reason.toJSON() : reason,
      null,
      2
    )} ${reason.stack}`
  );
});

server.on('listening', () => {
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port
  );

  app.service('api/users').find()
    .then(console.log)
    .catch(console.error);
  // app.service('api/users').find()
  //   .then(console.log)
  //   .catch(console.error);
  // app.service('api/users').find()
  //   .then(console.log)
  //   .catch(console.error);
});
