var sub1 = parseFloat(prompt("Enter marks for Math:"));
var sub2 = parseFloat(prompt("Enter marks for Sindhi:"));
var sub3 = parseFloat(prompt("Enter marks for Physics:"));
var sub4 = parseFloat(prompt("Enter marks for Computer:"));
var sub5 = parseFloat(prompt("Enter marks for Chemistry:"));

var obtainMarks = sub1 + sub2 + sub3 + sub4 + sub5;

var percentage = (obtainMarks / 500) * 100;

var grade;
if (percentage >= 90) {
  grade = 'A';
} else if (percentage >= 80) {
  grade = 'B';
} else if (percentage >= 70) {
  grade = 'C';
} else if (percentage >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

var result =
    "Total Marks-500: " +
    "\nMarks Obtained: " + obtainMarks +
    "\nPercentage: " + percentage.toFixed(2) + "%" +
    "\nGrade: " + grade;

alert(result);