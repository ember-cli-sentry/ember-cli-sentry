import { parseRegexErrors } from 'ember-cli-sentry/utils/parse-regex-errors';
import { module, test } from 'qunit';

module('Unit | Helper | parseRegexErrors');

test('it returns an empty array', function(assert) {
  let result = parseRegexErrors([]);

  assert.equal(result.length, 0);

  result = parseRegexErrors({});

  assert.equal(result.length, 0);

  result = parseRegexErrors(null);

  assert.equal(result.length, 0);

  result = parseRegexErrors(undefined);

  assert.equal(result.length, 0);
});

test('it does not modify basic strings', function(assert) {
  let errors = [
    'Error Message 401',
    'Error Message 404',
  ];

  let result = parseRegexErrors(errors);

  assert.deepEqual(result[0], errors[0]);
  assert.deepEqual(result[1], errors[1]);
});

test('it converts string RegExp into RegExp', function(assert) {
  let errors = [
    'Error Message 401',
    '/Error Message .*/',
  ];

  let result = parseRegexErrors(errors);

  assert.deepEqual(result[0], errors[0]);
  assert.notDeepEqual(result[1], errors[1]);
  assert.deepEqual(result[1], /Error Message .*/);
});

test('it preserves the RegExp flags', function(assert) {
  let errors = [
    '/Error Message .*/gi',
    '/Error Message .*/ig',
    '/Error Message .*/g',
    '/Error Message .*/i',
    '/Error Message .*/m',
  ];

  let result = parseRegexErrors(errors);

  assert.deepEqual(result[0], new RegExp('Error Message .*', 'gi'));
  assert.deepEqual(result[1], new RegExp('Error Message .*', 'ig'));
  assert.deepEqual(result[2], new RegExp('Error Message .*', 'g'));
  assert.deepEqual(result[3], new RegExp('Error Message .*', 'i'));
  assert.deepEqual(result[4], new RegExp('Error Message .*', 'm'));
});

test('it throws an error when a RegExp is invalid', function(assert) {
  assert.throws(parseRegexErrors([
    '/Error Message .*/foo',
  ]));
});
