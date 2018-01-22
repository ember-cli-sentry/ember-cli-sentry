'use strict';
const resolve = require('resolve');

module.exports = {
  name: 'ember-cli-sentry',

  included(/* app */) {
    const importer = this.import ? this : findHost(this);

    importer.import(
      resolve.sync('raven-js/dist/raven.js', { basedir: this.project.root }),
      { type: 'vendor' }
    );

    importer.import('vendor/raven-shim.js', {
      type: 'vendor',
      exports: { 'raven': ['default'] }
    });

    this._super.included.apply(this, arguments);
  }
};

function findHost(addon) {
  var current = addon;
  var app;

  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));

  return app;
}
