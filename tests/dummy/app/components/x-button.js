import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  tagName: 'button',

  click() {
    this.get('raven').captureBreadcrumb({message: 'Breadcrumb captured from test component'});
    this.get('raven').captureMessage('Message captured from test component');
    this.get('raven').captureException(new Error('Message captured from test component'));

    this.attrs.afterClick('x-button clicked');
  }
});
