import Ember from 'ember';
import Raven from 'raven';

export function initialize(container, config) {
  if (Raven.isSetup() === true) {
    return;
  }

  if (Ember.get(config, 'sentry.development') === true) {
    if (Ember.get(config, 'sentry.debug') === true) {
      Ember.Logger.info('`sentry` is configured for development mode.');
    }
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  container.lookup('service:raven').setup(config);
}
