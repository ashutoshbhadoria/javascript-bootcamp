// JavaScript uses Lexical Scoping (Static Scoping).
// Global Scope - Defined outside all code blocks.
// Local Scope - Defined inside a code block.
// In a scope you can access the variables defined in the scope or in any parent / ancestor.

// Global Scope - varOne
//   Local Scope - varTwo
//     Local Scope - varFour
//   Local Scope - varThree

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);
  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}
// console.log(varTwo); // Reference error
