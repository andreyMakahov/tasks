var assert = require('assert');
var calculate = require('../src/calculate');

describe('Calculator', function() {
    it('sum short variant of binary numbers', function() {
        assert.equal(calculate("10", "10"), 4);
        assert.equal(calculate("10", "0"), 2);
        assert.equal(calculate("101", "10"), 7);
    });

    it('sum 32 bit numbers', function() {
        assert.equal(calculate("00000000000000000000000000011111", "00000000000100000000000000000001"), 1048608);
    });
});