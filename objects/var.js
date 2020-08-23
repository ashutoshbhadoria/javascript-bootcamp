// Multiple declarations.
var firstName = "Ashutosh";
var firstName = "Aditya";
console.log(firstName);

// No block Scoping
if (true) {
  var firstName = "Lucifer";
}
console.log(firstName);

// Only function scoping
const setName = function () {
  var lastName = "Morningstar";
};
// console.log(lastName);

// Hoisting
console.log(a);
var a;

console.log(b);
var b = 10;

c = 20;
console.log(c);
var c = 10;
console.log(c);
