"use strict";
//Function to check CNIC eligibility
function checkCNIC(name, age) {
    if (age >= 18) {
        console.log(name + " is eligible for a CNIC.");
    }
    else {
        console.log(name + " is not eligible for a CNIC yet.");
    }
}
// Example usage
checkCNIC("Faizan", 21); // John is eligible for a CNIC.
checkCNIC("Aziz", 17); // Alice is not eligible for a CNIC yet.
