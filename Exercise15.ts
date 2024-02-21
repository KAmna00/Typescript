//Topic: Changing Guest List

//an array containing the names of people you'd like to invite to dinner
let guestList: string[] = ["Mustafa", "Sal", "Hoon", "Fatima", "Harley", "Alice", "Jade", "Ken"];

// Print a personalized invitation message to each person
guestList.forEach(person => {
    console.log(`\n Dear ${person},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n\n`);
});

// Print the name of the guest who can't make it
const guestWhoCantMakeIt: string = "Hoon";
console.log(`\n Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n\n `);

// Replace the name of the guest who can't make it with the name of the new person you are inviting
const newGuest: string = "Kylie";
guestList = guestList.map(person => person === guestWhoCantMakeIt ? newGuest : person);

// Print a second set of invitation messages
guestList.forEach(person => {
    console.log(`\n Dear ${person},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\nAmna \n\n`);
});
