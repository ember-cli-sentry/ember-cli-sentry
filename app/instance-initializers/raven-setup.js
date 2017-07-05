import Ember from 'ember';
import Raven from 'raven';
import config from '../config/environment';

export function initialize(application) {
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

  const { serviceName = 'raven' } = config.sentry;
  const lookupName = `service:${serviceName}`;
  const service = application.lookup ? application.lookup(lookupName) : application.container.lookup(lookupName);

  service.setup(config);
}

export default {
  initialize,
  name: 'sentry-setup'
};
