# test-feathers-cls

>

## About

This project is a basic test and example using `AsyncLocalStorage` to create
a `session` object that is available to any "nested" services. This could be usefull in passing things like user, authentication, transactions, etc to these
service calls nested N levels deep instead of having to "params drilling" (aka
explicitly passing params from service to service).

Note the app uses `startSessionAsync` as an "async" app hook to create a `session` and attach it to the context. Then all other services in the "flow" of these calls have access to `context.session`.

There is a single call to to the `api/users` service in the `src/index` file that kicks off a service flow and logs the `time` variable that is set in `session`. You can see that each service has access to this `session` without having it explicitly passed to it (which normally would have been done in the `withResult` resolvers)

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/test-feathers-cls
    npm install
    ```

3. Start your app

    ```
    npm start
    ```
