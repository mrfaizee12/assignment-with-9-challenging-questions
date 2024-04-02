function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var firstNumber = 5;
var secondNumber = 10;
var thirdNumber = 15;
var greaterNumber = findGreaterNumber(firstNumber, secondNumber);
console.log(" the greater number is: ".concat(greaterNumber));
