// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};
console.log(add(10, 1, 5));

// Default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score;
};
console.log(getScoreText());
console.log(getScoreText("Ashutosh"));
console.log(getScoreText(undefined, 69));
console.log(getScoreText("Ashutosh", 69));

// Tip Calculator challenge
// Add a template string.
let calculateTip = function (amount, tipPercent = .20) {
  return `A tip of ${tipPercent * 100}% on $${amount} would be $${amount *
    tipPercent}`;
};
console.log(calculateTip(100));
console.log(calculateTip(100, .30));
