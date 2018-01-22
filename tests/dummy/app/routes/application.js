import Route from '@ember/route';
import { get } from '@ember/object';

export default Route.extend({

   activate() {
    this._super();

    get(this, 'raven').callRaven('setUserContext', { id: 'abc12345', name: 'The mighty tester' });
    get(this, 'raven').captureMessage('Message captured from ApplicationRoute');
    get(this, 'raven').captureException(new Error('Exception captured from ApplicationRoute'));
  }
});
