//Topic: Hello Admin

// Define an array of usernames
let usernames: string[] = ["admin", "Amna", "Jannat", "Alice", "Ken", "Rey"];

// Loop through the array and print a greeting to each user
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
