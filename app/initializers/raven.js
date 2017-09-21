import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];
  const { exposedPropertyName = 'raven' } = config.sentry;

  application.inject('route', exposedPropertyName, `service:raven`);
  application.inject('component', exposedPropertyName, `service:raven`);
  application.inject('controller', exposedPropertyName, `service:raven`);
  application.inject('model', exposedPropertyName, `service:raven`);
}

export default {
  initialize,
  name: 'raven'
};
