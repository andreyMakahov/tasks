module.exports = {
    getParamNames: getParamNames,
    defaultArguments: function (func, params) {
        var argumentsOrder = func._argumentsOrder || getParamNames(func);

        var resultFn = function() {
            var argArray = [];
            var args = arguments;
            argumentsOrder.forEach(function(currentValue, index) {
                if (args.length > index) {
                    argArray.push(args[index]);
                } else {
                    argArray.push(params[currentValue]);
                }
            });

            return func.apply(null, argArray);
        };

        resultFn._argumentsOrder = argumentsOrder;

        return resultFn;
    }
};

function getParamNames(func) {
    var result;

    var STRIP_COMMENTS_REG_EXP = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES_REG_EXP = /([^\s,]+)/g;

    var fnStr = func.toString().replace(STRIP_COMMENTS_REG_EXP, '');
    result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES_REG_EXP);

    if(result === null) {
        result = [];
    }

    return result;
}