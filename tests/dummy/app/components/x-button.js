import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'button',

  click() {
    get(this, 'raven').captureMessage('Message captured from test component');
    get(this, 'raven').captureException(new Error('Message captured from test component'));

    get(this, 'afterClick')('x-button clicked');
  }
});
