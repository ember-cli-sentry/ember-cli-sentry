import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  tagName: 'button',

  click() {
    this.get('logger').captureMessage('Message captured from test component');
    this.get('logger').captureException(new Error('Message captured from test component'));

    this.attrs.afterClick('x-button clicked');
  }
});
