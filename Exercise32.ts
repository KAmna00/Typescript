//Topic: Checking Usernames

// Define the current users and new users arrays
let current_users: string[] = ["Amna", "Jannat", "Alice", "Ken", "Rey"];
let new_users: string[] = ["joe", "jade", "Omer", "sarah", "fatima"];

// Loop through the new_users list
for (let new_user of new_users) {
    
    // Convert the new username to lowercase for case insensitive comparison
    let lower_new_user: string = new_user.toLowerCase();
    
    // Check if the lowercase new username exists in the current_users array
    if (current_users.map(user => user.toLowerCase()).includes(lower_new_user)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
