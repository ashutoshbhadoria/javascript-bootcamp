let claculateGrade = function (studentScore, maxScore) {
  let studentPercentage = (studentScore / maxScore) * 100;
  let studentGrade = "";
  if (studentPercentage >= 90) {
    studentGrade = "A";
  } else if (studentPercentage >= 80) {
    studentGrade = "B";
  } else if (studentPercentage >= 70) {
    studentGrade = "C";
  } else if (studentPercentage >= 60) {
    studentGrade = "D";
  } else {
    studentGrade = "F";
  }

  return `${studentScore /
    maxScore} -> You got a ${studentGrade} (${studentPercentage})`;
};

console.log(claculateGrade(97, 100));
console.log(claculateGrade(56, 100));
console.log(claculateGrade(75, 100));
