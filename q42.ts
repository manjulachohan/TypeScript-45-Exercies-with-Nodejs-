// Define the function to show magicians name

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(madicians: string[]){
   return madicians.map(name => `The Great ${name}`);

}

// Define an array of magicians names
let madician_names = ["Harry poter", "Hamza", "Usman"];

// call make_great function to modify magicians names
 let great_magicians = make_great(madician_names);

 // call show_magicians that show modified list of magicians
show_magicians(great_magicians)
