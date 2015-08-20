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

  var options = {};

  options.whitelistUrls = config.sentry.whitelistUrls;

  options.release = config.APP.version;

  if (typeof config.sentry.dataCallback === 'function') {
    options.dataCallback = config.sentry.dataCallback;
  }

  Raven.config(config.sentry.dsn, options).install();
}

export default {
  name: 'sentry-setup',
  initialize: initialize
};
