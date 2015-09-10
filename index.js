/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sentry',

  contentFor: function(type, config) {
    if (type === 'body-footer' && config.sentry && !config.sentry.development && config.sentry.cdn) {
      return '<script src="' + config.sentry.cdn +'"></script>';
    }
  }
};
