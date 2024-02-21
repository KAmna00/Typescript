//Topic: Large Shirts

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} T-shirt with the following message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("medium");

// Make a shirt of any size with a different message
make_shirt("small", "You Were Born To Be Real, Not Perfect ~ Suga");
