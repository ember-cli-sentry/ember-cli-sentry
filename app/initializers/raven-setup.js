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
    whitelistUrls: config.sentry.whitelistUrls,
    release: config.sentry.release
  }).install();

  _onerror = Ember.onerror;
  Ember.onerror = function(error){
    Raven.captureException(error);
    if (typeof _onerror === 'function') {
      _onerror.call(this, error);
    }
  }

  Ember.RSVP.configure('onerror', function(error){
    Raven.captureException(error);
  });
}

export default {
  name: 'sentry-setup',
  initialize: initialize
};
