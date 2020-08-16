// Global Scope -> convertFahrenheitToCelcius, tempOne, tempTwo.
//  LocalScope -> fahrenheit, celcius.
//    LocalScope -> isFreezing.

let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9;

  if (celcius <= 0) {
    let isFreezing = true;
  }

  return celcius;
};

let tempOne = convertFahrenheitToCelcius(32);
let tempTwo = convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);
