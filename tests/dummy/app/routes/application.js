import Route from '@ember/route';
import { get } from '@ember/object';
import { on } from '@ember/object/evented';
import { inject as service } from '@ember/service';

export default Route.extend({
  raven: service(),

  captureMessageOnActivate: on('activate', function() {
    get(this, 'raven').callRaven('setUserContext', { id: 'abc12345', name: 'The mighty tester' });
    get(this, 'raven').captureMessage('Message captured from ApplicationRoute');
    get(this, 'raven').captureException(new Error('Exception captured from ApplicationRoute'));
  })
});
