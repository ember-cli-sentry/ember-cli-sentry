import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  raven: service(),

  tagName: 'button',

  click() {
    this.get('raven').captureMessage('Message captured from test component');
    this.get('raven').captureException(new Error('Message captured from test component'));

    this.afterClick('x-button clicked');
  }
});
