/* global Raven */

import config from 'dummy/config/environment';
import Ember from 'ember';
import { initialize } from '../../../instance-initializers/raven-setup';
import { module, test } from 'qunit';

let registry, application;

const { run, Application } = Ember;

module('Unit | Instance initializer | raven setup', {
  beforeEach() {
    run(function() {
      application = Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('Specified Raven.js version is loaded properly', function(assert) {
  assert.expect(3);
  initialize(application);

  assert.ok(Raven, 'Raven object should be loaded');
  assert.strictEqual(Raven.VERSION, config.sentry.version, 'Loaded Raven.js version should match version specified in configuration');
  assert.strictEqual(Raven.isSetup(), false, 'Given dummy config, Raven.isSetup() should be false');
});
