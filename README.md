Ember-cli-sentry
================

An ember-cli addon adding [Sentry](https://www.getsentry.com) support.

## Install

From any ember-cli application, run `ember install:addon ember-cli-sentry`.

## Usage

ember-cli-sentry expects to find a `sentry` key in _ENV_.

```
var ENV = {
  /* rest of the conf */
  sentry: {
    dsn: 'https://dsn_key@app.getsentry.com/app_id',
    version: '1.1.16',
    whitelistUrls: [ 'localhost:4200', 'site.local' ]
  }
}
```

## Licence

MIT
