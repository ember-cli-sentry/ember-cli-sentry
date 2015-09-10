import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({

  actions: {
    captureSomething(something) {
      this.get('raven').captureMessage(`"${something}" captured from ApplicationController`);

      try {
        this.get('raven').captureException(new Error('Exception captured from ApplicationController'));
      } catch (error) {
        console.log(error.message);
      }
    }
  }
});
