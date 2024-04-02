"use strict";
let currentDate = new Date();
let currentHour = currentDate.getHours();
if (currentHour >= 5 && currentHour < 12) {
    console.log("Good Morning");
}
else if (currentHour >= 12 && currentHour < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}
