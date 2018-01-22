import Controller from '@ember/controller';
import { get } from '@ember/object';
import { run } from '@ember/runloop';
import { Promise } from 'rsvp';

export default Controller.extend({
  actions: {
    captureSomething(something) {
      get(this, 'raven').captureBreadcrumb({
        message: 'Capturing a breadcrumb',
        category: 'testing',
        level: 'debug',
      });
      get(this, 'raven').captureMessage(`"${something}" captured from ApplicationController`);
      get(this, 'raven').captureException(new Error('Exception captured from ApplicationController'));
    },

    navigateToNonExistingRoute() {
      this.transitionToRoute('outer.space');
    },

    callDelayedError() {
      new Promise(function(resolve, reject) {
        run.later(null, function() {
          reject('delayed error');
        }, 2000);
      });
    }
  }
});
