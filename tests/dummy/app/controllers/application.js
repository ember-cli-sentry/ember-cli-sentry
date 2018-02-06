import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

import RSVP from 'rsvp';

export default Controller.extend({
  raven: service(),

  actions: {
    captureSomething(something) {
      this.get('raven').captureBreadcrumb({
        message: 'Capturing a breadcrumb',
        category: 'testing',
        level: 'debug',
      });
      this.get('raven').captureMessage(`"${something}" captured from ApplicationController`);
      this.get('raven').captureException(new Error('Exception captured from ApplicationController'));
    },

    navigateToNonExistingRoute() {
      this.transitionToRoute('outer.space');
    },

    callDelayedError() {
      new RSVP.Promise(function(resolve, reject) {
        run.later(null, function() {
          reject('delayed error');
        }, 2000);
      });
    }
  }
});
