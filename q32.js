var current_users = ['sana', 'baber', 'iqra', 'saba', 'admin'];
var new_users = ['adeeba', 'sara', 'maryam', 'sobia', 'laiba'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log(" ".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log(" ".concat(newUser, " is available."));
    }
});
