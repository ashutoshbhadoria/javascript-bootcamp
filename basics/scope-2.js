// Undeclared varaibles lead to leaked globals.
// Look out for variable shadowing.

let name = "Ashutosh";

if (true) {
  let name = "Aditya";
  age = 22; // leaked global
  console.log(name);
  console.log(age);
}

console.log(name);
console.log(age); // leaked global
