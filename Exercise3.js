//Topic: Name Cases
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personname = "Amna";
// Print person's name in lowercase
console.log("Lowercase:", personname.toLowerCase());
// Print person's name in uppercase
console.log("Uppercase:", personname.toUpperCase());
// Print person's name in titlecase
console.log("Titlecase:", personname.charAt(0).toUpperCase() + personname.slice(1).toLowerCase());
