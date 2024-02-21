//Topic: Changing Guest List


//an array containing the names of people you'd like to invite to dinner

var guestList = ["Mustafa", "Sal", "Hoon", "Fatima", "Harley", "Alice", "Jade", "Ken"];

// Print a personalized invitation message to each person

guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n\n"));
});

// Print the name of the guest who can't make it

var guestWhoCantMakeIt = "Hoon";
console.log("\n Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner. \n\n"));

// Replace the name of the guest who can't make it with the name of the new person you are inviting

var newGuest = "Kylie";
guestList = guestList.map(function (person) { return person === guestWhoCantMakeIt ? newGuest : person; });

// Print a set of invitation messages

guestList.forEach(function (person) {
    console.log("\n Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\n Amna \n\n"));
});
