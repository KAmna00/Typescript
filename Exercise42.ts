                 //Topic: Great Magicians

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

//an array of magician's names
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great() to modify the array
make_great(magicians);

// Call the show_magicians() to see the modified list
show_magicians(magicians);
