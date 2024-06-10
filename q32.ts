let current_users: string [] = ['sana', 'baber', 'iqra', 'saba','admin'];
let new_users: string [] = ['adeeba', 'sara', 'maryam', 'sobia','laiba'];

new_users.forEach((newUser) => {
    

    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      
        )
    )   {
        console.log(` ${newUser} will need to enter a new username.`);
    }else{
        console.log(` ${newUser} is available.`);
        
    }
});

