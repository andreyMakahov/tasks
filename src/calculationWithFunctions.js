module.exports = {
    zero: function(action) {
        if (typeof action === 'undefined') { return 0; }
        return execute(0, action);
    },
    one: function (action) {
        if (typeof action === 'undefined') { return 1; }
        return execute(1, action);
    },
    two: function (action) {
        if (typeof action === 'undefined') { return 2; }
        return execute(2, action);
    },
    three: function (action) {
        if (typeof action === 'undefined') { return 3; }
        return execute(3, action);
    },
    four: function (action) {
        if (typeof action === 'undefined') { return 4; }
        return execute(4, action);
    },
    five: function (action) {
        if (typeof action === 'undefined') { return 5; }
        return execute(5, action);
    },
    six: function (action) {
        if (typeof action === 'undefined') { return 6; }
        return execute(6, action);
    },
    seven: function (action) {
        if (typeof action === 'undefined') { return 7; }
        return execute(7, action);
    },
    eight: function (action) {
        if (typeof action === 'undefined') { return 8; }
        return execute(8, action);
    },
    nine: function (action) {
        if (typeof action === 'undefined') { return 9; }
        return execute(9, action);
    },
    plus: function (x) {
        return function(y) {
            return y + x;
        };
    },
    minus: function (x) {
        return function(y) {
            return y - x;
        };
    },
    times: function (x) {
        return function(y) {
            return y * x;
        };
    },
    dividedBy: function (x) {
        return function(y) {
            return y / x;
        };
    }
};

function execute(number, action) {
    return action(number);
}