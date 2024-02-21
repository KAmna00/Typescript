//Topic: Intentional Error

// Uncomment the line below to invoke the wrong program

/*Wrong Program with error 
// Define an array of numbers

const numbers: number[] = [1, 2, 3, 4, 5];

// Try to access the element at index 6 (which doesn't exist)
const wrongIndex: number = 6;
console.log("Accessing element at index 6:", numbers[wrongIndex]);*/


//correction of the above program 

// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Access the element at index 5
const correctIndex: number = 4;
console.log("Accessing element at index 5:", numbers[correctIndex]);
