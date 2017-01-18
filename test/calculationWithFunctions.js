var assert = require('assert');
var calculationWithFunctions = require('../src/calculationWithFunctions');
var zero = calculationWithFunctions.zero;
var one = calculationWithFunctions.one;
var two = calculationWithFunctions.two;
var three = calculationWithFunctions.three;
var four = calculationWithFunctions.four;
var five = calculationWithFunctions.five;
var six = calculationWithFunctions.six;
var seven = calculationWithFunctions.seven;
var eight = calculationWithFunctions.eight;
var nine = calculationWithFunctions.nine;

var plus = calculationWithFunctions.plus;
var minus = calculationWithFunctions.minus;
var times = calculationWithFunctions.times;
var dividedBy = calculationWithFunctions.dividedBy;

describe('Calculation with functions', function() {
    it('testing common operations', function() {
        assert.equal(seven(times(five())), 35);
        assert.equal(four(plus(nine())), 13);
        assert.equal(eight(minus(three())), 5);
        assert.equal(six(dividedBy(two())), 3);
    });

    it('dividing by zero should equals Infinity', function() {
        assert.equal(three(dividedBy(zero())), Infinity);
    });

    it('dividing zero by number should equals zero', function() {
        assert.equal(zero(dividedBy(one())), 0);
    });

    it('dividing zero by zero should equals NaN', function() {
        assert.equal(isNaN(zero(dividedBy(zero()))), true);
    });
});