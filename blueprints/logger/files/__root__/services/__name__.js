import Ember from 'ember';
import RavenLogger from 'ember-cli-sentry/services/raven';

const { computed } = Ember;

export default RavenLogger.extend({

  isRavenUsable: computed(function() {
    //
  }).volatile(),

  captureException(error) {
    //
  },

  captureMessage(message) {
    //
  }
});
