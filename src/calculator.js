function calculate(num1, num2) {
    return binToDec(num1) + binToDec(num2);
}

function binToDec(num) {
    return num.split('').reverse().reduce(function(preview, current, index) {
        return (current === '1') ? preview + Math.pow(2, index) : preview;
    }, 0);
}