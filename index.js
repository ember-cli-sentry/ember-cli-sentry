/* eslint-env node */
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

  included: function(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/raven-shim.js', {
      type: 'vendor',
      exports: { 'raven': ['default'] }
    });

    this._super.included.apply(this, arguments);
  }
};
