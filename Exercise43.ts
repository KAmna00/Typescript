//Topic: Unchnaged Magicians 

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];

    for (const magician of magicians) {
        great_magicians.push("the Great " + magician);
    }

    return great_magicians;
}

// Define an array of magician's names
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great() with a copy of the original array
const great_magicians: string[] = make_great([...magicians]);

// Call show_magicians() with each array
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
