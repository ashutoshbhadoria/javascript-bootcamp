let number = 103.9941;

// decimal places, can be rounded.
console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log(number.toFixed(3));

// Rounding to integers
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// Random number generation
let min = 10;
let max = 20;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// Challenge guessing game.

let randomNumberGenereator = function (lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
};

let randomNumberResult = randomNumberGenereator(0, 5);
let myGuess = function (guess) {
  return guess === randomNumberResult ? "correct" : "wrong";
};

console.log("---------------------------------------");
console.log("The answer is -> ", randomNumberResult);
console.log("0 -> ", myGuess(0));
console.log("1 -> ", myGuess(1));
console.log("2 -> ", myGuess(2));
console.log("3 -> ", myGuess(3));
console.log("4 -> ", myGuess(4));
console.log("5 -> ", myGuess(5));
console.log("---------------------------------------");
