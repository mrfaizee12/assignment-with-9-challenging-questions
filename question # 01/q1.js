function checkNumber(number) {
    var result;
    if (number > 0) {
        result = "positive";
    }
    else if (number < 0) {
        result = "negative";
    }
    else {
        result = "zero";
    }
    console.log("this number is: ".concat(result));
}
var num = -1;
var num1 = 2;
checkNumber(num);
checkNumber(num1);
