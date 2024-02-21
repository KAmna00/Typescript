//Topic: Cars

function carInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add the extra information to the car object
    extras.forEach(function (extra) {
        Object.keys(extra).forEach(function (key) {
            car[key] = extra[key];
        });
    });
    return car;
}
// Call the function with the required information and additional name-value pairs
var myCar = carInfo("Toyota", "Camry", { color: "Red" }, { year: 2022 });
// Print the returned object to verify the information
console.log(myCar);
