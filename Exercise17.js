//Topic: Shrinking Guests List
// Define an array containing the names of people you'd like to invite to dinner
var guestList = ["Mustafa", "Sal", "Fatima", "Alice", "Jade", "Ken", "Hoon", "Harley"];
// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna\n"));
});
// Print a message saying that you can invite only two people for dinner
console.log("\n Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
// Remove guests from your list one at a time until only two names remain in your list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("\n Sorry, ".concat(removedGuest, ", we won't be able to invite you to dinner.\n"));
}
// Print a message to each of the two people still on your list, letting them know they’re still invited
guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou're still invited to dinner at my place.\n\nSincerely,\nAmna \n"));
});
// Remove the last two names from your list
guestList.splice(0, 2);
// Print your list to make sure you actually have an empty list at the end of your program
console.log("\n Guest list after removing all names:", guestList );
