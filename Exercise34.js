//Topic: Pizzas

// Store the names of favorite pizzas in an array
var pizzas = ["Pepperoni", "Fajita", "Hawaiian"];

// Print the name of each pizza using a for loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}

// Modify the for loop to print a sentence for each pizza
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}

// Add a line stating how much you like pizza
console.log("Pizza is one of my favorite foods. I really love pizza!");
