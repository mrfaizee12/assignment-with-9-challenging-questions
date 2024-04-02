// Q2: Write a program that checks if a number is even or odd.
function checkNumber(num) {
    if (num % 2 === 0) {
        return "".concat(num, " is even.");
    }
    else {
        return "".concat(num, " is odd.");
    }
}
// Test the function
var numberCheck = 10;
console.log(checkNumber(numberCheck));
