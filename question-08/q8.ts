#! /usr/bin/env node

import inquirer from "inquirer";

// asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter your First Nmuber", type: "number", name: "firstNumber"},
    {message: "Enter your  Second Number", type: "number",name: "secondNumber"},
    {
        message: "Select one of the Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

// conditional statement if-else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
} else {
    console.log("Please select invalid operator");
}

console.log("THE END");