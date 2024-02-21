//Topic: Large Shirts

function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, " T-shirt with the following message: \"").concat(message, "\"."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("medium");
// Make a shirt of any size with a different message
make_shirt("small", "You Were Born To Be Real, Not Perfect ~ Suga");
