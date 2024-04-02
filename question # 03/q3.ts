
function findGreaterNumber(num1: number, num2: number): number {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let firstNumber: number = 5;
let secondNumber: number = 10;

let greaterNumber: number = findGreaterNumber(firstNumber, secondNumber,);

console.log(` the greater number is: ${greaterNumber}`);
