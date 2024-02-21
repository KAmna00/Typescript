//Topic: More Conditional Tests

// Tests for equality and inequality with strings
let str1: string = "apple";
let str2: string = "orange";
console.log("Equality test for strings:", str1 === str2); // False
console.log("Inequality test for strings:", str1 !== str2); // True

// Tests using the lower case function
let fruit: string = "Apple";
console.log("Is 'fruit' in lowercase equal to 'apple'?", fruit.toLowerCase() === "apple"); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;
console.log("Is num1 equal to num2?", num1 === num2); // False
console.log("Is num1 greater than num2?", num1 > num2); // True
console.log("Is num1 less than num2?", num1 < num2); // False
console.log("Is num1 greater than or equal to num2?", num1 >= num2); // True
console.log("Is num1 less than or equal to num2?", num1 <= num2); // False

// Tests using "and" and "or" operators
let x: number = 10;
let y: number = 5;
let z: number = 15;
console.log("Is x greater than y and less than z?", x > y && x < z); // True
console.log("Is x greater than y or z?", x > y || x > z); // True

// Test whether an item is in an array
let fruits: string[] = ["apple", "orange", "banana"];
console.log("Is 'apple' in the 'fruits' array?", fruits.includes("apple")); // True

// Test whether an item is not in an array
console.log("Is 'grape' not in the 'fruits' array?", !fruits.includes("grape")); // True
