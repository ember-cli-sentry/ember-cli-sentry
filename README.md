Ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

## Install

From any ember-cli application, run `ember install:addon ember-cli-sentry`.

## Usage

ember-cli-sentry expects to find a `sentry` key in _ENV_.

```javascript
var ENV = {
  /* rest of the conf */
  sentry: {
    skipCdn: false, // skip loading from cdn
    cdn: '//cdn.ravenjs.com',
    dsn: 'https://dsn_key@app.getsentry.com/app_id',
    version: '1.1.16',
    whitelistUrls: [ 'localhost:4200', 'site.local' ],
    release: 'd931e759f47267da6e0a65b18ce9e403fc93dab8', // Pass release-parameter to Sentry
    development: false // Set to true, to disable while developing
  }
}
```

## Content Security Policy

To allow Ravenjs to work properly, you need to add an entry to `ENV.contentSecurityPolicy`:

```
"img-src": "data: app.getsentry.com",
```

## Trapping exceptions

ember-cli-sentry will trap exceptions within `Ember.run` loop and unhandled RSVP failures.

Since one will most likely implement his own ApplicationRoute error, I didn't bother adding a mixin for it.

Here is a way to trap routing errors:

```javascript
// routes/application.js

/* global Raven */

export default Ember.Route.extend({
  actions: {
    error: function(err){
      Raven.captureException(err);
      /* more error handling: redirect to a catchall route, etc */
    }
  }
});
```

Installing this addon will expose Raven globally, you should therefore declare it to `jshint`.

## Licence

MIT
