

function checkNumber(number: number): void {
    let result: string;

    if (number > 0) {
        result = "positive";
    } else if ( number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }

    console.log(`this number is: ${result}`);
}

let num: number = -1;
let num1 = 2;
checkNumber(num);
checkNumber(num1);