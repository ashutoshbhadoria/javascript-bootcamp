let myBook = {
  title: "1984",
  author: "George Orwell",
  pages: 326,
};

let otherBook = {
  title: "Angels and Demons",
  author: "Dan Brown",
  pages: 600,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} was written by ${book.author}.`,
    pagesSummary: `${book.title} is ${book.pages} pages long.`,
  };
};

console.log(getSummary(myBook));
console.log(getSummary(myBook).summary);
console.log(getSummary(myBook).pagesSummary);

console.log(getSummary(otherBook));
console.log(getSummary(otherBook).summary);
console.log(getSummary(otherBook).pagesSummary);

// Temperature challenge
let convertTemperatue = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celcius: (fahrenheit - 32) * 5 / 9,
    kelvein: (fahrenheit + 459.67) * 5 / 9,
  };
};

console.log(convertTemperatue(90));
console.log(convertTemperatue(-40));
