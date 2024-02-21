//Topic: More Conditional Tests

// Tests for equality and inequality with strings
var str1 = "apple";
var str2 = "orange";
console.log("Equality test for strings:", str1 === str2); // False
console.log("Inequality test for strings:", str1 !== str2); // True

// Tests using the lower case function
var fruit = "Apple";
console.log("Is 'fruit' in lowercase equal to 'apple'?", fruit.toLowerCase() === "apple"); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 equal to num2?", num1 === num2); // False
console.log("Is num1 greater than num2?", num1 > num2); // True
console.log("Is num1 less than num2?", num1 < num2); // False
console.log("Is num1 greater than or equal to num2?", num1 >= num2); // True
console.log("Is num1 less than or equal to num2?", num1 <= num2); // False

// Tests using "and" and "or" operators
var x = 10;
var y = 5;
var z = 15;
console.log("Is x greater than y and less than z?", x > y && x < z); // True
console.log("Is x greater than y or z?", x > y || x > z); // True

// Test whether an item is in an array
var fruits = ["apple", "orange", "banana"];
console.log("Is 'apple' in the 'fruits' array?", fruits.includes("apple")); // True

// Test whether an item is not in an array
console.log("Is 'grape' not in the 'fruits' array?", !fruits.includes("grape")); // True
