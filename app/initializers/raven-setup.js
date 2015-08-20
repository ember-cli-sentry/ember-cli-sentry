/* global Raven */

import config from '../config/environment';
import Ember from 'ember';

export function initialize() {
  // Disable for development

  if (Ember.get(config, 'sentry.development') === true) {
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  Raven.config(config.sentry.dsn, {
    release: config.APP.version,
    whitelistUrls: config.sentry.whitelistUrls
  }).install();
}

export default {
  name: 'sentry-setup',
  initialize: initialize
};
