/* jshint node: true */
'use strict';

var fs = require('fs');

module.exports = {
  name: 'ember-cli-sentry',

  included: function(app) {
    this._super.included(app);

    try {
      var stats = fs.statSync(app.bowerDirectory + '/raven-js/dist/raven.js');
      if (!stats.errno) {
        app.import(app.bowerDirectory + '/raven-js/dist/raven.js');
      }
    } catch (e) {
      this.ui.writeLine('ember-cli-sentry will not be loaded from bower installation');
    }
  },

  contentFor: function(type, config) {
    if (type === 'body-footer' && config.sentry && !config.sentry.development && config.sentry.cdn) {
      return '<script src="' + config.sentry.cdn + '"></script>';
    }
  }
};
