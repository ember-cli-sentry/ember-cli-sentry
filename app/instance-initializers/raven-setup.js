import { get } from '@ember/object';
import Raven from 'raven';
import config from '../config/environment';

export function initialize(application) {
  if (Raven.isSetup() === true) {
    return;
  }

  if (get(config, 'sentry.development') === true) {
    if (get(config, 'sentry.debug') === true) {
      // eslint-disable-next-line no-console
      console.info('`sentry` is configured for development mode.');
    }
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  const container = application.lookup ? application : application.container;

  container.lookup('service:raven').setup(config);
}

export default {
  initialize,
  name: 'sentry-setup'
};
