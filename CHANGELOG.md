# ember-cli-sentry changelog

## TO BE RELEASED

Note: Raven.js 3.0 introduces some potentially breaking changes. Please take a
look at the [raven.js CHANGELOG](
https://github.com/getsentry/raven-js/blob/master/CHANGELOG.md#300 )

- Update raven.js to 3.0.5
- Expose raven 3.x's `captureBreadcrumb` function

## 2.3.3

- Removed a possibly annoying log [#37](https://github.com/damiencaselli/ember-cli-sentry/pull/47).

## 2.3.2

- Switch to Ember.assign (Ember.merge deprecated).
- Update raven.js to 2.2.0.

## 2.3.1

- Fix `application.container` deprecation notice ([#34](https://github.com/damiencaselli/ember-cli-sentry/issues/34)).

## 2.3.0

- Upgrade `ember-cli` to 2.3.0.
- Update dummy application raven version.

## 2.2.0

- Fix issue [#39](https://github.com/damiencaselli/ember-cli-sentry/issues/39) caused from previous update.
