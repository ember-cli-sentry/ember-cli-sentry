import Ember from 'ember';

const { Route, on } = Ember;

export default Route.extend({

  captureMessageOnActivate: on('activate', function() {
    this.get('raven').captureMessage('Message captured from ApplicationRoute');

    try {
      this.get('raven').captureException(new Error('Exception captured from ApplicationRoute'));
    } catch (error) {
      console.log(error.message);
    }
  })
});
