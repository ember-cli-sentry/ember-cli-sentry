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
   * @param  {String} message The message to capture
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
   *
   * Tries to capture a breadcrumb.
   *
   * Sentry supports a concept called Breadcrumbs, which is a trail of events
   * which happened prior to an issue.
   *
   * Often times these events are very similar to traditional logs, but also
   * have the ability to record more rich structured data.
   *
   * @param {string} message A string describing the event. The most common vector, often used as a drop-in for a
   *   traditional log message.
   * @param {string} category A category to label the event under. This generally is similar to a logger name, and will
   *   let you more easily understand the area an event took place, such as auth.
   * @param {Object} data A mapping of metadata around the event. This is often used instead of message, but may also
   *   be used in addition.
   * @param {('error'|'warn'|'info'|'debug')} The level may be any of error, warn, info, or debug.
   */
  captureBreadcrumb(message, category, data, level) {
    if (this.get('isRavenUsable')) {
      window.Raven.captureBreadcrumb(...arguments);
    }
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
      const _oldOnError = Ember.onerror;

      Ember.onerror = function(error) {
        if (logger.ignoreError(error)) {
          return;
        }

        logger.captureException(error);
        if (typeof _oldOnError === 'function') {
          _oldOnError.call(this, error);
        }
      };

      RSVP.on('error', (reason) => {
        if (logger.ignoreError(reason)) {
          return;
        }

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
  },

  /**
   * Hook that allows error filtering in global
   * error cacthing methods.
   *
   * @method ignoreError
   * @param  {Error} error
   * @return {Boolean}
   */
  ignoreError() {
    return false;
  },

  /**
   * Runs a Raven method if it is available.
   *
   * @param  {String} methodName The method to call
   * @param  {Array} ...optional Optional method arguments
   * @return {any} Raven method return value or false
   * @throws {Error} If an error is captured and thrown
   */
  callRaven(methodName, ...optional) {
    if (this.get('isRavenUsable')) {
      try {
        return window.Raven[methodName].call(window.Raven, ...optional);
      } catch (error) {
        this.captureException(error);
        return false;
      }
    }
  }
});

export default RavenService;
