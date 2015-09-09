/* global Raven */

import Ember from 'ember';
import config from '../config/environment';

export function initialize(/* application */) {

  // Disable for development
  if (Ember.get(config, 'sentry.development') === true) {
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const { dsn, whitelistUrls } = config.sentry;

  Raven.config(dsn, {
    whitelistUrls,
    release: config.APP.version
  }).install();
}

export default {
  initialize,
  name: 'sentry-setup'
};
