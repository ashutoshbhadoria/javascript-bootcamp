let temp = 65;

if (temp >= 60 & temp <= 90) {
  console.log("It is pretty nice outside.");
} else if (temp <= 32 || temp >= 120) {
  console.log("Do not go outside.");
} else {
  console.log("Eh do what you want.");
}

// Vegan challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Offer only vegan options.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Offer some vegan options.");
} else {
  console.log("Offer anything.");
}
