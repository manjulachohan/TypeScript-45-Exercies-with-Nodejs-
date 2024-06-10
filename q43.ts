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

// making a copy of orignal array through .Slice() function

let copy_magician_name = madician_names.slice()

// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_name);

// Show both arrays Original and Copied

// Original

console.log("Origin Array\n");
show_magicians(madician_names);

// Copied

console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);



