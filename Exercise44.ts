//Topic: Sandwiches 

function orderSandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    console.log("Items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("-----------------------");
}

// Call the function three times with different number of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Tuna Salad");
