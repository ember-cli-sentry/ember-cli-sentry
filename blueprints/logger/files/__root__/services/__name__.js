import Ember from 'ember';
import RavenLogger from 'ember-cli-sentry/services/raven';

const { computed } = Ember;

export default RavenLogger.extend({

  unhandledPromiseErrorMessage: '',

  captureException(error) {
    this._super(...arguments);
  },

  captureMessage(message) {
    return this._super(...arguments);
  },

  enableGlobalErrorCatching() {
    return this._super(...arguments);
  }
});
