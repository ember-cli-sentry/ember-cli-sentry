ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

Docs are available [here](https://damiencaselli.github.io/ember-cli-sentry/).

## What it does (and does not)

This addon does:

* Enable safe use of Raven.js whether you are in development mode or not.
* Inject a logging service to routes, components, controllers and models to access Raven object.
* Provide a default logger generator that should work for the vast majority of people.
* Add an **opt-out** bower dependency to ravenjs.
* Provide rather complete customization.

This addon does **not**:

* Generate the logging service for you.
* Provide a Sentry key for testing.

## Important notice if you migrate from 1.x.x to 2.x

Please have a look at [this wiki entry](https://github.com/damiencaselli/ember-cli-sentry/wiki/Migration-from-1.x.x-to-2.x) if you upgrade major version of ember-cli-sentry.

## Install

From any ember-cli application, run `ember install ember-cli-sentry`.

_Note: Since **v2.1.2**, Raven bower component is automatically included by this addon.  
If you want to use your own packaged version or the cdn option, you'll have to opt-out by removing it from bower dependencies._

addon will assume there is an available service that proxies Raven, which is not the case unless you already did the install.

The easiest way of doing it is to create a service only extending `ember-cli-sentry/services/raven`:

```js
// your-app/services/custom-logger.js
export { default } from 'ember-cli-sentry/services/raven';
```

You can also use a generator `ember g logger <logger-name>`, which will generate a service called `<logger-name>` extending `ember-cli-sentry/services/raven` and exposing its methods and properties.

Now that you have a dedicated service for Raven.js, let's configure it.

## Configuration

### TLDR

You already have a service named `raven` that extends `ember-cli-sentry/services/raven`.

```js
// config/environment.js

module.exports = function(environment) {
  var ENV = {

    /* config */

    sentry: {
      dsn: 'https://<dummykey>@app.getsentry.com/<dummyproject>'
    }
  }
}
```

### Complete config

```js
// config/environment.js

module.exports = function(environment) {
  var ENV = {

    /* config */

    sentry: {

      /**
       * If Raven.js is not inlined in your code, this is
       * where you want to define it.
       *
       * I recommend **not** using a build containing ember.js plugin (https://github.com/getsentry/raven-js/blob/master/plugins/ember.js)
       * since setting `globalErrorCatching: true` will perform the same
       * operation, but safely.
       *
       * @type {String}
       * @default undefined
       */
      cdn: 'https://cdn.ravenjs.com/2.2.0/raven.min.js',

      /**
       * The only mandatory parameter.
       *
       * @type {String}
       */
      dsn: 'https://<dummykey>@app.getsentry.com/<dummyproject>',

      /**
       * Sets Raven.debug property when running `Raven.config`.
       *
       * @type {Boolean}
       * @default true
       */
      debug: true,

      /**
       * If set to true, it will prevent Raven.js from being initialized.
       * Errors and logs will be logged to the console (default) instead of being reported by Raven.
       *
       * @type {Boolean}
       * @default undefined
       */
      development: false,

      /**
       * Injects the logging service as this property.
       *
       * @type {String}
       * @default 'raven'
       */
      exposedPropertyName: 'raven',

      /**
       * If set to true, addon will try to have Ember.onerror
       * and Ember.RSVP.on('error') captured by Raven.
       *
       * @type {Boolean}
       * @default true
       */
      globalErrorCatching: true,

      /**
       * Service used to interface with Raven.
       *
       * @type {String}
       * @default 'raven'
       */
      serviceName: 'raven',

      /**
       * Raven.js option.
       *
       * @type {Array}
       * @default []
       */
      includePaths: [],

      /**
       * Raven.js option.
       *
       * @type {Array}
       * @default []
       */
      whitelistUrls: [],

      /**
       * Options to pass directly to Raven.js. Note: whitelistUrls and
       * includePaths in this will take precedence
       * over the above.
       *
       * @default {}
       */
      ravenOptions: {},
    }
  }
}
```

## Content Security Policy

To allow Ravenjs to work properly, you need to add a couple of thing to the content security policy rules:

```
'script-src': "'self' 'unsafe-inline' 'unsafe-eval' cdn.ravenjs.com",
'img-src': "data: app.getsentry.com",
'connect-src': "'self' app.getsentry.com"
```

## Meaningless stack traces?

See [this issue](https://github.com/damiencaselli/ember-cli-sentry/issues/28).

## Example

The dummy application in tests is a working example with a couple of logging here and there, and a default logger.

## Dependencies

[Raven.js](https://github.com/getsentry/raven-js)

## Licence

[MIT](https://raw.githubusercontent.com/damiencaselli/ember-cli-sentry/master/LICENSE.md)
