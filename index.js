/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sentry',

  contentFor: function(type, config) {
    if (type === 'body-footer' && config.sentry && !config.sentry.development && !config.sentry.skipCdn) {
      return '<script src="' + config.sentry.cdn + '/' + config.sentry.version + '/ember,jquery,native/raven.min.js"></script>';
    }
  }
};
