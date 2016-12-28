import Ember from 'ember';
import config from '../config/environment';
import { parseRegexErrors } from 'ember-cli-sentry/utils/parse-regex-errors';
import Raven from 'raven';

// Ember merge is deprecated as of 2.5, but we need to check for backwards
// compatibility.
const assign = Ember.assign || Ember.merge;

export function initialize(application) {
  // Prevent multiple configurations in FastBoot
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
    Ember.set(ravenOptions, 'ignoreErrors', parseRegexErrors(ravenOptions.ignoreErrors));
  }

  const lookupName = `service:${serviceName}`;
  const service = application.lookup ? application.lookup(lookupName) : application.container.lookup(lookupName);

  try {
    Raven.debug = debug;

    // Keeping existing config values for includePaths, whitelistUrls, for compatibility.
    const ravenConfig = assign({
      environment,
      includePaths,
      whitelistUrls,
      release: service.get(serviceReleaseProperty) || config.APP.version
    }, ravenOptions);

    Raven.config(dsn, ravenConfig);
  } catch (e) {
    Ember.Logger.warn('Error during `sentry` initialization: ' + e);
    return;
  }

  Raven.install();

  const { globalErrorCatching = true } = config.sentry;

  if (globalErrorCatching === true) {
    service.enableGlobalErrorCatching();
  }
}

export default {
  initialize,
  name: 'sentry-setup'
};
