function zero(action) {
    if (typeof action === 'undefined') { return 0; }
    return execute(0, action);
}
function one(action) {
    if (typeof action === 'undefined') { return 1; }
    return execute(1, action);
}
function two(action) {
    if (typeof action === 'undefined') { return 2; }
    return execute(2, action);
}
function three(action) {
    if (typeof action === 'undefined') { return 3; }
    return execute(3, action);
}
function four(action) {
    if (typeof action === 'undefined') { return 4; }
    return execute(4, action);
}
function five(action) {
    if (typeof action === 'undefined') { return 5; }
    return execute(5, action);
}
function six(action) {
    if (typeof action === 'undefined') { return 6; }
    return execute(6, action);
}
function seven(action) {
    if (typeof action === 'undefined') { return 7; }
    return execute(7, action);
}
function eight(action) {
    if (typeof action === 'undefined') { return 8; }
    return execute(8, action);
}
function nine(action) {
    if (typeof action === 'undefined') { return 9; }
    return execute(9, action);
}

function execute(number, action) {
    return action(number);
}

function plus(x) {
    return function(y) {
        return y + x;
    };
}
function minus(x) {
    return function(y) {
        return y - x;
    };
}
function times(x) {
    return function(y) {
        return y * x;
    };
}
function dividedBy(x) {
    return function(y) {
        return y / x;
    };
}