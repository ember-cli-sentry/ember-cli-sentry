import Ember from 'ember';

const { Service, computed } = Ember;

export default Service.extend({

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
  }
});
