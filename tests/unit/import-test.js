import { module, test } from 'qunit';
import Raven from 'raven';

module(`import Raven from 'raven'`);

test('Raven.captureException() exists', function(assert) {
  assert.equal(typeof Raven.captureException, 'function');
});
