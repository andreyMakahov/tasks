var assert = require('assert');
var getParamNames = require('../src/defaultArguments').getParamNames;
var defaultArguments = require('../src/defaultArguments').defaultArguments;

describe('Default Arguments', function() {

    it('testing getParamNames function', function() {
        function add(a, b) { return a * b; }

        assert.deepEqual(getParamNames(add), ['a', 'b'])
    });

    it('testing getParamNames function with comments', function() {
        function add(a, /* b parameter should be a function */ b) { return b(a); }

        assert.deepEqual(getParamNames(add), ['a', 'b'])
    });

    it('testing default arguments decorator', function() {
        function add(a, b) { return a+b; }

        var add_ = defaultArguments(add, { b: 9 });

        assert.equal(add_(10), 19); // returns 19
        assert.equal(add_(10, 7), 17); // returns 17
        assert.equal(isNaN(add_()), true); // returns NaN
    });

    it('testing calling defaultArguments repeatedly to change the defaults', function() {

        function add(a, b) { return a * b; }

        var add_ = defaultArguments(add, { a: 10, b: 10 });

        add_ = defaultArguments(add_, { b: 20, a: 20 });
        assert.equal(add_(), 400);
    });

});