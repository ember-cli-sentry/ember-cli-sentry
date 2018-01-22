import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  raven: service(),

  tagName: 'button',

  click() {
    this.get('raven').captureMessage('Message captured from test component');
    this.get('raven').captureException(new Error('Message captured from test component'));

    this.attrs.afterClick('x-button clicked');
  }
});
