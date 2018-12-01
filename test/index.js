var almostEqual = require('almost-equal');
var isFunction = require('lodash/isFunction');
var test = require('tape');

var mayhew = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(mayhew));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(almostEqual(mayhew(100, 10), 130, 1));
});

test('100 for 6', function(t) {
  t.plan(1);
  t.ok(almostEqual(mayhew(100, 6), 121, 1));
});
