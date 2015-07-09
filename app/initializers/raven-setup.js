/* global Raven */

import config from '../config/environment';
import Ember from 'ember';

export function initialize() {
  // Disable for development
  if (config.sentry.development) {
    return;
  }

  var _onerror;

  Raven.config(config.sentry.dsn, {
    release: config.APP.version,
    whitelistUrls: config.sentry.whitelistUrls
  }).install();
}

export default {
  name: 'sentry-setup',
  initialize: initialize
};
