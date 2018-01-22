'use strict';

module.exports = {
  name: 'ember-cli-sentry',

  options: {
    nodeAssets: {
      'raven-js': {
        import: [{ path: 'dist/raven.js' }]
      }
    }
  },

  included(/* app */) {
    var importer = this.import ? this : findHost(this);

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
