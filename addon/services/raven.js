import Ember from 'ember';

const { RSVP, Service, computed } = Ember;

export default Service.extend({

  globalErrorCatchingInitialized: false,

  unhandledPromiseErrorMessage: 'Unhandled Promise error detected',

  isRavenUsable: computed(function() {
    return !!(window.Raven && window.Raven.isSetup() === true);
  }).volatile(),

  captureException(error) {
    if (this.get('isRavenUsable')) {
      window.Raven.captureException(...arguments);
    } else {
      throw error;
    }
  },

  captureMessage(message) {
    if (this.get('isRavenUsable')) {
      window.Raven.captureMessage(...arguments);
    } else {
      console.log(message);
    }
    return true;
  },

  enableGlobalErrorCatching() {
    if (this.get('isRavenUsable') && !this.get('globalErrorCatchingInitialized')) {
      const logger = this;
      let _oldOnError = Ember.onerror;

      Ember.onerror = function(error) {
        logger.captureException(error);
        if (typeof _oldOnError === 'function') {
          _oldOnError.call(this, error);
        }
      };

      RSVP.on('error', (reason) => {
        if (reason instanceof Error) {
          this.captureException(reason, { extra: {
            context: this.get('unhandledPromiseErrorMessage')
          } });
        } else {
          this.captureMessage(this.get('unhandledPromiseErrorMessage'), {
            extra: { reason }
          });
        }
      });

      this.set('globalErrorCatchingInitialized', true);
    }
  }
});
