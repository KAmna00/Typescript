//Topic: Dinner Guests

// Define an array containing the names of people you'd like to invite to dinner
let guestList: string[] = ["Mustafa", "Sal", "Hoon", "Fatima", "Harley", "Alice", "Jade", "Ken"];

// Print the number of people being invited to dinner
console.log(`\n You are inviting ${guestList.length} people to dinner. \n`);

// Print a personalized invitation message to each person
guestList.forEach(person => {
    console.log(`\n Dear ${person},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n`);
});
