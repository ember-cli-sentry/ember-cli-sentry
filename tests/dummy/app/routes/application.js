import Ember from 'ember';

const { Route, on } = Ember;

export default Route.extend({

  captureMessageOnActivate: on('activate', function() {
    this.get('raven').callRaven('setUserContext', { id: 'abc12345', name: 'The mighty tester' });
    this.get('raven').captureMessage('Message captured from ApplicationRoute');
    this.get('raven').captureException(new Error('Exception captured from ApplicationRoute'));
  })
});
