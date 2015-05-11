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
    whitelistUrls: config.sentry.whitelistUrls
  }).install();

  _onerror = Ember.onerror;
  Ember.onerror = function(error){
    Raven.captureException(error);
    if (typeof _onerror === 'function') {
      _onerror.call(this, error);
    }
  }

  Ember.RSVP.on('error', function(error){
    if(error !== undefined){
      Raven.captureException(error);
    }
  });
}

export default {
  name: 'sentry-setup',
  initialize: initialize
};
