
let totalMarks: number = 800;
let obtainedMarks: number = 640;

let percentage = (obtainedMarks / totalMarks) * 100;
let grade: string;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
}
 else {
    grade = "F";
 }
 
 console.log(`Percentage: ${percentage}%`);
 console.log(`Grade: ${grade}`);
 