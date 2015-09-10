import RavenLogger from 'ember-cli-sentry/services/raven';

export default RavenLogger.extend({

  captureMessage(message) {
    window.alert(message);
  }
});
