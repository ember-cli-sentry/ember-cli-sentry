import Ember from 'ember';
import config from '../config/environment';

export function initialize(application) {

  if (Ember.get(config, 'sentry.development') === true) {
    Ember.Logger.info('`sentry` is configured for development mode.');
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const {
    dsn,
    debug = true,
    includePaths = [],
    whitelistUrls = [],
    serviceName = 'raven',
    serviceReleaseProperty = 'release'
  } = config.sentry;

  const lookupName = `service:${serviceName}`;
  const service = application.container.lookup(lookupName);

  try {
    window.Raven.debug = debug;

    window.Raven.config(dsn, {
      includePaths,
      whitelistUrls,
      release: service.get(serviceReleaseProperty) || config.APP.version
    });
  } catch (e) {
    Ember.Logger.warn('Error during `sentry` initialization: ' + e);
    return;
  }

  window.Raven.install();

  const { globalErrorCatching = true } = config.sentry;

  if (globalErrorCatching === true) {
    service.enableGlobalErrorCatching();
  }
}

export default {
  initialize,
  name: 'sentry-setup'
};
