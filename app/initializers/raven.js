import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];
  const { serviceName = 'logger' } = config.sentry;
  const lookupName = `service:${serviceName}`;
  const { exposedPropertyName = 'logger' } = config.sentry;

  application.inject('route', exposedPropertyName, lookupName);
  application.inject('component', exposedPropertyName, lookupName);
  application.inject('controller', exposedPropertyName, lookupName);
  application.inject('model', exposedPropertyName, lookupName);
}

export default {
  initialize,
  name: 'raven'
};
