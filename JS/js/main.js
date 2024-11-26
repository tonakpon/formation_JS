 console.log("Hello World");

// Condition
let customerIsBanned = false;
let soup = "Chiken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = "Here's your ounder of ${soup} & crachers";
} else if (soup) {
    reply = "Here's your ounder of ${soup}";
}   else {
    reply = "Sorry, we're out of soup"
}
console.log(reply);
let name = prompt("Please enter your name ");
console.log(name);