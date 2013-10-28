'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.wp2md = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = fs.readdirSync('tmp/default_options').sort();
    var expected = fs.readdirSync('test/expected/default_options').sort();
    test.deepEqual(expected, actual, 'should generate several files');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = fs.readdirSync('tmp/custom_options').sort();
    var expected = fs.readdirSync('test/expected/custom_options').sort();
    test.deepEqual(expected, actual, 'should generate several files with custom option(s)');

    test.done();
  },
};
