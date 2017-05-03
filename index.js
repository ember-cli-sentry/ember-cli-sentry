/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-sentry',

  // Imports raven.js to vendor directory if installed via NPM
  treeForVendor(vendorTree) {
    try {
      var ravenPackage = require.resolve('raven-js');
      var ravenTree = new Funnel(path.resolve(path.dirname(ravenPackage), '../dist'), {
        files: ['raven.js']
      });

      return new MergeTrees([vendorTree, ravenTree]);
    } catch (e) {
      return vendorTree;
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    try {
      var ravenPackage = require.resolve('raven-js'); // will trigger catch if NPM package is absent

      app.import('vendor/raven.js');
    } catch (e) {
      try {
        var stats = fs.statSync(app.bowerDirectory + '/raven-js/dist/raven.js');
        if (!stats.errno) {
          app.import(app.bowerDirectory + '/raven-js/dist/raven.js');
        }
      } catch (e) {
        this.ui.writeLine('raven-js will not be loaded from NPM or Bower installation');
      }
    }
  },

  contentFor(type, config) {
    if (type === 'body-footer' && config.sentry && !config.sentry.development && config.sentry.cdn) {
      return '<script src="' + config.sentry.cdn + '"></script>';
    }
  }
};
