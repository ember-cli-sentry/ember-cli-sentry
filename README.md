Ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

## What it does

This add-on:

* Enables safe use of Raven.js whether you are in development mode or not.
* Injects a logger service to routes, components, controllers and models to access Raven object.
* Provides a default logger service that should work for the vaste majority of people.
* Is completely customizable.

## Install

From any ember-cli application, run `ember install ember-cli-sentry`.

## Configuration

### TLDR

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

      /*
       * If Raven.js is not inlined in your code, this is
       * where you want to define it.
       *
       * @type {String}
       * @default undefined
       */
      cdn: '//cdn.ravenjs.com/1.1.20/ember,jquery,native/raven.min.js',

      /*
       * The only mandatory parameter.
       *
       * @type {String}
       */
      dsn: 'https://<dummykey>@app.getsentry.com/<dummyproject>',

      /*
       * Sets Raven.debug property
       *
       * @type {Boolean}
       * @default true
       */
      debug: true,

      /*
       * If set to true, this add-on will never initialize
       * Raven object and capturing will be redirected
       * to the console.
       *
       * @type {Boolean}
       * @default undefined
       */
      development: false,

      /*
       * Injects the logger service as this property.
       *
       * @type {String}
       * @default 'logger'
       */
      exposedPropertyName: 'logger',

      /*
       * If set to true, add-on will try to have Ember.onerror
       * and Ember.RSVP.on('error') captured by Raven.
       *
       * @type {Boolean}
       * @default true
       */
      globalErrorCatching: true,

      /*
       * Raven.js option.
       *
       * @type {Array}
       * @default []
       */
      includePaths: [],

      /*
       * Service used to interface with Raven.
       *
       * @type {String}
       * @default 'logger'
       */
      serviceName: 'logger',

      /*
       * Raven.js option.
       *
       * @type {Array}
       * @default []
       */
      whitelistUrls: []
    }
  }
}
```

## Content Security Policy

To allow Ravenjs to work properly, you need to add `"img-src": "data: app.getsentry.com"` to content security policies.

## Dependencies

[Raven.js](https://github.com/getsentry/raven-js).

## Licence

MIT
