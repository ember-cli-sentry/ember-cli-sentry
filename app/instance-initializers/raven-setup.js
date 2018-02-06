import { initialize } from 'ember-cli-sentry';
import config from '../config/environment';

export default {
  name: 'sentry-setup',
  initialize(application) {
    initialize(application.lookup ? application : application.container, config);
  },
};
