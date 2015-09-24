import Ember from 'ember';
import config from '../config/environment';

export function initialize(application) {

  if (Ember.get(config, 'sentry.development') === true) {
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const {
    dsn,
    debug = true,
    includePaths = [],
    whitelistUrls = []
  } = config.sentry;

  try {
    window.Raven.debug = debug;

    window.Raven.config(dsn, {
      includePaths,
      whitelistUrls,
      release: config.APP.version
    });
  } catch (e) {
    return;
  }

  window.Raven.install();

  const { globalErrorCatching = true } = config.sentry;

  if (globalErrorCatching === true) {
    const { serviceName = 'logger' } = config.sentry;
    const lookupName = `service:${serviceName}`;
    application.container.lookup(lookupName).enableGlobalErrorCatching();
  }
}

export default {
  initialize,
  name: 'sentry-setup'
};
