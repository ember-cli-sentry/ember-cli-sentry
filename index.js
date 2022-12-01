'use strict';

/* eslint-env node */

const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-sentry',

  included() {
    this._super.included.apply(this, arguments);

    let host = this.import ? this : findHost(this);
    host.import('vendor/raven-shim.js');
    host.import('vendor/raven.js');
  },

  treeForVendor(vendorTree) {
    let ravenPath = path.dirname(resolve.sync('raven-js/dist/raven.js'));
    let ravenTree = new Funnel(ravenPath, {
      files: ['raven.js'],
    });

    return new MergeTrees([vendorTree, ravenTree]);
  },
};

function findHost(addon) {
  let current = addon;
  let app;

  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));

  return app;
}
