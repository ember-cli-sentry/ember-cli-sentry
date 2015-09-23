import Ember from 'ember';

const { Route, on } = Ember;

export default Route.extend({

  captureMessageOnActivate: on('activate', function() {
    this.get('logger').captureMessage('Message captured from ApplicationRoute');
    this.get('logger').captureException(new Error('Exception captured from ApplicationRoute'));
  })
});
