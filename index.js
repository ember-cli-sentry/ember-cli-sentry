/* jshint node: true */
'use strict';

module.exports = {

  name: 'ember-cli-sentry',

  contentFor: function(type, config){
    if (type === 'body' && !config.sentry.skipCdn) {
      return '<script src="' + config.sentry.cdn + '/' + config.sentry.version + '/jquery,native/raven.min.js"></script>';
    }
  }

};
