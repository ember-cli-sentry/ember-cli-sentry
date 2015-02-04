/* jshint node: true */
'use strict';

module.exports = {

  name: 'ember-cli-sentry',

  contentFor: function(type, config){
    if (type === 'body') {
      return '<script src="//cdn.ravenjs.com/' + config.sentry.version + '/jquery,native/raven.min.js"></script>';
    }
  }

};
