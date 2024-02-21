//Topic: Dinner Guests

// Define an array containing the names of people you'd like to invite to dinner
var guestList = ["Mustafa", "Sal", "Hoon", "Fatima", "Harley", "Alice", "Jade", "Ken"];

// Print the number of people being invited to dinner
console.log("\n You are inviting ".concat(guestList.length, " people to dinner. \n"));

// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\n Amna \n"));
});
