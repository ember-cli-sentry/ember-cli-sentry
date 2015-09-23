/* global Raven */

import Ember from 'ember';
import config from '../config/environment';

export function initialize(application) {

  // Disable for development
  if (Ember.get(config, 'sentry.development') === true) {
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const { debug = true, dsn, includePaths = [], whitelistUrls = [] } = config.sentry;

  try {
    Raven.debug = debug;

    Raven.config(dsn, {
      includePaths,
      whitelistUrls,
      release: config.APP.version
    });
  } catch (e) {
    return;
  }

  Raven.install();

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
