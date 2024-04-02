// Q2: Write a program that checks if a number is even or odd.

function checkNumber(num: number): string {
    if (num % 2 === 0) {
        return `${num} is even.`;

    } else {
        return `${num} is odd.`;

    }
}

// Test the function
const numberCheck: number = 10;
console.log(checkNumber(numberCheck));

