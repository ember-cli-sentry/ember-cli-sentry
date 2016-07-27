import Ember from 'ember';
import config from '../config/environment';

// Ember merge is deprecated as of 2.5, but we need to check for backwards
// compatibility.
const assign = Ember.assign || Ember.merge;

const parseRegexErrors = function parseRegexErrors(ravenOptions) {
  return Ember.get(ravenOptions, 'ignoreErrors').map((error) => {
    if (error.startsWith('/') && error.endsWith('/')) {
      return new RegExp(error.slice(1, error.length - 1));
    }

    return error;
  });
}

export function initialize(application) {

  if (Ember.get(config, 'sentry.development') === true) {
    if (Ember.get(config, 'sentry.debug') === true) {
      Ember.Logger.info('`sentry` is configured for development mode.');
    }
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const {
    dsn,
    environment,
    debug = true,
    includePaths = [],
    whitelistUrls = [],
    serviceName = 'raven',
    serviceReleaseProperty = 'release',
    ravenOptions = {}
  } = config.sentry;

  if (Ember.get(ravenOptions, 'ignoreErrors.length')) {
    Ember.set(ravenOptions, 'ignoreErrors', parseRegexErrors(ravenOptions));
  }

  const lookupName = `service:${serviceName}`;
  const service = application.lookup(lookupName);

  try {
    window.Raven.debug = debug;

    // Keeping existing config values for includePaths, whitelistUrls, for compatibility.
    const ravenConfig = assign({
      environment,
      includePaths,
      whitelistUrls,
      release: service.get(serviceReleaseProperty) || config.APP.version
    }, ravenOptions);

    window.Raven.config(dsn, ravenConfig);
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
