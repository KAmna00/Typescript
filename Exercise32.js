//Topic: Checking Usernames

// Define the current users and new users arrays
var current_users = ["Amna", "Jannat", "Alice", "Ken", "Rey"];
var new_users = ["joe", "jade", "Omer", "sarah", "fatima"];

// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];

    // Convert the new username to lowercase for case insensitive comparison
    var lower_new_user = new_user.toLowerCase();

    // Check if the lowercase new username exists in the current_users array
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lower_new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
