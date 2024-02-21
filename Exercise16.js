//Topic:More Guests
// Define an array containing the names of people you'd like to invite to dinner
var guestList = ["Mustafa", "Sal", "Hoon", "Fatima", "Harley", "Alice", "Jade", "Ken"];
// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n"));
});
// Print a message informing people that you found a bigger dinner table
console.log("Good news! We found a bigger dinner table! \n");
// Add one new guest to the beginning of your array
guestList.unshift("Kylie");
// Add one new guest to the middle of your array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Daneen");
// Use push() to add one new guest to the end of your list
guestList.push("Ruz");
// Print a new set of invitation messages
guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n"));
});
