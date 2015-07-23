Ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

Addon follows [ember 2.x project versioning](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html).

## Install

From any ember-cli application, run `ember install ember-cli-sentry`.

## Usage

ember-cli-sentry expects to find a `sentry` key in _ENV_.

```javascript
var ENV = {
  /* rest of the conf */
  sentry: {
    skipCdn: false, // skip loading from cdn
    cdn: '//cdn.ravenjs.com',
    dsn: 'https://<key>@app.getsentry.com/<project>',
    version: '1.1.19',
    whitelistUrls: [ 'localhost:4200', 'site.local' ],
    development: false // Set to true, to disable while developing
  }
}
```

## Content Security Policy

To allow Ravenjs to work properly, you need to add `"img-src": "data: app.getsentry.com"` to content security policies.

## Trapping exceptions

ember-cli-sentry will trap exceptions within `Ember.run` loop and unhandled RSVP failures.

Since one will most likely implement their own ApplicationRoute error, I didn't bother adding a mixin for it.

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

## Dependencies

Uses [Raven.js Ember plugin](https://github.com/getsentry/raven-js).

## Licence

MIT
