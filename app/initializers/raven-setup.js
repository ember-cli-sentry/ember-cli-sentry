/* global Raven */

import config from '../config/environment';

export function initialize() {
  Raven.config(config.sentry.dsn, {
    whitelistUrls: config.sentry.whitelistUrls
  }).install();
}

export default {
  name: 'raven-setup',
  initialize: initialize
};
