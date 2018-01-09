import Ember from 'ember';
import Raven from 'raven';
import config from '../config/environment';

export function initialize(application) {
  if (Raven.isSetup() === true) {
    return;
  }

  if ('development' === config.environment) {
    if (Ember.get(config, 'sentry.development') !== true) {
      return;
    }
    if (Ember.get(config, 'sentry.debug') === true) {
      Ember.Logger.info('`sentry` is configured for development mode.');
    }
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const container = application.lookup ? application : application.container;

  container.lookup('service:raven').setup(config);
}

export default {
  initialize,
  name: 'sentry-setup'
};
