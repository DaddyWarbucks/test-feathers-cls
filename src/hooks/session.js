const { AsyncLocalStorage } = require('async_hooks');
const session = new AsyncLocalStorage();

module.exports.startSessionAsync = async (context, next) => {
  if (session.getStore()) {
    context.session = session;
    return next();
  } else {
    console.log('starting session: ', context.path);
    return session.run(new Map(), async () => {
      session.getStore().set('time', new Date().getTime());
      context.session = session;
      return next();
    });
  }
};


module.exports.logSession = context => {
  console.log(`logging from ${context.path}:${context.type} hook: `, {
    time: context.session.getStore().get('time')
  });
  return context;
};