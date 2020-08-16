let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
  console.log("The account is locked");
} else if (userRole == "admin") {
  console.log("Welcome admin");
} else {
  console.log("Welcome");
}

// Weather challenge.

let temp = 45;

if (temp <= 32) {
  console.log("It is freezing outside.");
} else if (temp >= 110) {
  console.log("It is pretty hot outside");
} else {
  console.log("Go for it. It is pretty nice.");
}
