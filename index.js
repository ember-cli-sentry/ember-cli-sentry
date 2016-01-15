/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sentry',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/raven-js/dist/raven.min.js');
  },

  contentFor: function(type, config) {
    if (type === 'body-footer' && config.sentry && !config.sentry.development && config.sentry.cdn) {
      return '<script src="' + config.sentry.cdn + '"></script>';
    }
  }
};
