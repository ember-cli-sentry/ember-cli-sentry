import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';
import { inject as service } from '@ember/service';

export default Route.extend({
  raven: service(),

  captureMessageOnActivate: on('activate', function() {
    this.get('raven').callRaven('setUserContext', { id: 'abc12345', name: 'The mighty tester' });
    this.get('raven').captureMessage('Message captured from ApplicationRoute');
    this.get('raven').captureException(new Error('Exception captured from ApplicationRoute'));
  })
});
