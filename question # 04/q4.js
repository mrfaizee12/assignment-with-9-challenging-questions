var totalMarks = 800;
var obtainedMarks = 640;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 50) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Percentage: ".concat(percentage, "%"));
console.log("Grade: ".concat(grade));
