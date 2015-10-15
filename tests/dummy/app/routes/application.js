import Ember from 'ember';

const { Route, on } = Ember;

export default Route.extend({

  captureMessageOnActivate: on('activate', function() {
    this.get('logger').callRaven('setUserContext', { id: 'abc12345', name: 'The mighty tester' });
    this.get('logger').captureMessage('Message captured from ApplicationRoute');
    this.get('logger').captureException(new Error('Exception captured from ApplicationRoute'));
  })
});
