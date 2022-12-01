import { get } from '@ember/object';

import Raven from 'raven';

export function initialize(container, config) {
  if (Raven.isSetup() === true) {
    return;
  }

  if (get(config, 'sentry.development') === true) {
    if (get(config, 'sentry.debug') === true) {
      console.info('`sentry` is configured for development mode.');
    }
    return;
  }

  if (!config.sentry) {
    throw new Error('`sentry` should be configured when not in development mode.');
  }

  container.lookup('service:raven').setup(config);
}
