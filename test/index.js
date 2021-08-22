const almostEqual = require('almost-equal');
const isFunction = require('lodash/isFunction');
const test = require('tape');

const mayhew = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(mayhew));
});

test('100 for 10', (t) => {
  t.plan(1);
  t.ok(almostEqual(mayhew(100, 10), 130, 1));
});

test('100 for 6', (t) => {
  t.plan(1);
  t.ok(almostEqual(mayhew(100, 6), 121, 1));
});
