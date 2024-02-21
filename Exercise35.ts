//Topic: Animals

// Store the names of animals in an array

let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal using a for loop

for (let animal of animals) {
    console.log(animal);
}

// Modify the for loop to print a statement about each animal

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line stating what these animals have in common

console.log("Any of these animals would make a great pet!");
