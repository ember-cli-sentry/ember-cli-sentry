import Ember from 'ember';

const {
  RSVP,
  Service,
  computed
} = Ember;

/**
 * Default available logger service.
 *
 * You can simply extend or export this Service to use it in the application.
 *
 * @class RavenService
 * @module ember-cli-sentry/services/raven
 * @extends Ember.Service
 */
let RavenService = Service.extend({

  /**
   * Global error catching definition status
   *
   * @property globalErrorCatchingInitialized
   * @type Boolean
   * @default false
   * @private
   */
  globalErrorCatchingInitialized: false,

  /**
   * Message to send to Raven when facing an unhandled
   * RSVP.Promise rejection.
   *
   * @property unhandledPromiseErrorMessage
   * @type String
   * @default 'Unhandled Promise error detected'
   */
  unhandledPromiseErrorMessage: 'Unhandled Promise error detected',

  /**
   * Utility function used internally to check if Raven object
   * can capture exceptions and messages properly.
   *
   * @property isRavenUsable
   * @type Ember.ComputedProperty
   */
  isRavenUsable: computed(function() {
    return !!(window.Raven && window.Raven.isSetup() === true);
  }).volatile(),

  /**
   * Tries to have Raven capture exception, or throw it.
   *
   * @method captureException
   * @param {Error} error The error to capture
   * @throws {Error} An error if Raven cannot capture the exception
   */
  captureException(error) {
    if (this.get('isRavenUsable')) {
      window.Raven.captureException(...arguments);
    } else {
      throw error;
    }
  },

  /**
   * Tries to have Raven capture message, or send it to console.
   *
   * @method captureMessage
   * @param {String} message The message to capture
   * @return {Boolean}
   */
  captureMessage(message) {
    if (this.get('isRavenUsable')) {
      window.Raven.captureMessage(...arguments);
    } else {
      throw new Error(message);
    }
    return true;
  },

  /**
   * Binds functions to `Ember.onerror` and `Ember.RSVP.on('error')`.
   *
   * @method enableGlobalErrorCatching
   * @chainable
   * @see http://emberjs.com/api/#event_onerror
   */
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

    return this;
  }
});

export default RavenService;
