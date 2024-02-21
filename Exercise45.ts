//Topic: Cars

function carInfo(manufacturer: string, modelName: string, ...extras: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add the extra information to the car object
    extras.forEach(extra => {
        Object.keys(extra).forEach(key => {
            car[key] = extra[key];
        });
    });

    return car;
}

// Call the function with the required information and additional name-value pairs
const myCar = carInfo("Toyota", "Camry", { color: "Red" }, { year: 2022 });

// Print the returned object to verify the information
console.log(myCar);
