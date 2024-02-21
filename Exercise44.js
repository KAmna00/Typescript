//Topic: Sandwiches 
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    console.log("Items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("-----------------------");
}
// Call the function three times with different number of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Tuna Salad");
