let name = "Ashutosh Bhadoria";

// length.
console.log(name.length);

// Case related.
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// trimming whitespaces.
console.log("  Ashutosh Bhadoria    ".trim());

// Check if a substring exists.
console.log("123passwordsadsde3".includes("password"));

// Password valid challenge.

let isValidPassword = function (password) {
  return password.length > 8 && !password.toLowerCase().includes("password");
};

console.log(isValidPassword("1234aasd"));
console.log(isValidPassword("ashutoshbhadoriatreuwqd"));
console.log(isValidPassword("ashutoshPasSwOrdtreuwqd"));
