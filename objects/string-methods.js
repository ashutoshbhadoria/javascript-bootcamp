let name = "Ashutosh Bhadoria";

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log("  Ashutosh Bhadoria    ".trim());

console.log("123passwordsadsde3".includes("password"));

// Password valid challenge.

let isValidPassword = function (password) {
  return password.length > 8 && !password.toLowerCase().includes("password");
};

console.log(isValidPassword("1234aasd"));
console.log(isValidPassword("ashutoshbhadoriatreuwqd"));
console.log(isValidPassword("ashutoshPasSwOrdtreuwqd"));
