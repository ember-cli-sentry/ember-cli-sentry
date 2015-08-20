/* global Raven */

import config from 'dummy/config/environment';
import Ember from 'ember';
import { initialize } from '../../../initializers/raven-setup';
import { module, test } from 'qunit';

let registry, application;

module('Unit | Initializer | raven setup', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('Specified Raven.js version is loaded properly', function(assert) {
  assert.expect(2);
  initialize(registry, application);

  assert.ok(Raven, 'Raven object should be loaded');
  assert.strictEqual(Raven.VERSION, config.sentry.version, 'Loaded Raven.js version should match version specified in configuration');
});
