import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  raven: service(),

  tagName: 'button',

  click() {
    get(this, 'raven').captureMessage('Message captured from test component');
    get(this, 'raven').captureException(new Error('Message captured from test component'));

    this.attrs.afterClick('x-button clicked');
  }
});
