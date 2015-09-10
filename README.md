Ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

## Install

From any ember-cli application, run `ember install ember-cli-sentry`.

======

## From 2.0

_**Important notice**_

Addon does **not** follow [ember 2.x project versioning](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html) anymore, since I cannot ask people at Ember to make a release just because this addon got one :-)

From 2.0, handling errors changed quite a <del>bit</del> lot.

Please check the new config example, some things overly complicated such as cdn|version|skipCdn combo were rewritten, and some options were added such as `debug`.

Some people (including me at some point) were having trouble handling errors for each environment, and ended up writing pieces of code that smells simply to figure how to log errors without triggering any error:

```javascript
reportError(err) {
  if (Raven /* and Raven is properly configured, and so on */) {
    Raven.captureException(err);
  } else {
    console.log(err);
    // insert unmaintainable code here
  }
}
```

Doing this for every error in the application is simply not satisfactory.

The best way I found so far to abstract this is to access _Raven_ through a service that falls back to error throwing or console logging if the `Raven` object is not accessible.

This can happen if you're in development mode, if specified _dsn_ is broken, or if any other error happened during Raven initialization.

The addon expects you to provide a service to handle the Raven abstraction.  
Filling the `config.sentry.serviceName: '<the-logger-name>'` will tell the plugin to inject this service as a `logger` property (or `config.sentry.exposedPropertyName` if specified) into routes, controllers, components and models.

Installing `ember-cli-sentry` provides a generator to create the needed service:

```
ember g logger <the-logger-name>

// Creates app/services/<the-logger-name>.js
```

You can still use `Ember.inject.service()` for every other object that needs this dependency.

If no service is specified, initializer will try to lookup for `service:logger` to resolve the injection.

This should make any `this.get('logger').captureMessage('ohai')` call safe enough to not juggle with conditional statements depending on the environment.

I was considering exposing the `raven` service instead of `logger`, but I believe this allows switching from|to any other logging system much more easier.

Mirroring `captureException` and `captureMessage` to `error` and `log` methods would also be a nice addition.

To sum up:

1.  Your config should now look like this:

    ```javascript
    // config/environment.js

    module.exports = function(environment) {
      var ENV = {
        /* config */
        sentry: {
          cdn: '//cdn.ravenjs.com/1.1.20/ember,jquery,native/raven.min.js',
          debug: true, // (default)
          dsn: 'https://<dummykey>@app.getsentry.com/<dummyproject>',
          exposedPropertyName: 'logger', // (default)
          includePaths: [ ], // (default)
          serviceName: 'logger', // (default)
          whitelistUrls: [ ], // (default)
          version: '1.1.20', // (default)
        }
      }
    }
    ```

2.  You should have a service named `logger` that extends `ember-cli-sentry/services/raven`.  
    If you don't, you can run `ember g logger logger` blueprint and roll your own, or create a service that simply exposes `ember-cli-sentry/services/raven`.

    ```javascript
    // services/logger.js
    export { default } from 'ember-cli-sentry/services/raven';
    ```

3.  Replace all if-else-whatever weird logging code by `this.get('logger').captureException(/* the error */)`.

4.  You can safely remove _jshint_ Raven declarations.

_**End of important notice**_

======

## Content Security Policy

To allow Ravenjs to work properly, you need to add `"img-src": "data: app.getsentry.com"` to content security policies.

## Trapping exceptions

_ember-cli-sentry_ will trap exceptions within `Ember.run` loop and unhandled RSVP failures.

Since one will most likely implement their own ApplicationRoute error, I didn't bother adding a mixin for it.

Here is a way to trap routing errors:

```javascript
// routes/application.js

const { Route } = Ember;

export default Route.extend({
  actions: {
    error(err) {
      this.get('logger').captureException(err);
      /* more error handling: redirect to a catchall route, etc */
    }
  }
});
```

*Note: remember that `error` event will only bubble if you `return true` (see error substate on [Ember guides](http://guides.emberjs.com/v1.13.0/routing/loading-and-error-substates/)).*

## Dependencies

Uses [Raven.js Ember plugin](https://github.com/getsentry/raven-js).

## Licence

MIT
