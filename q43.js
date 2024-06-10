// Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(madicians) {
    return madicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var madician_names = ["Harry poter", "Hamza", "Usman"];
// making a copy of orignal array through .Slice() function
var copy_magician_name = madician_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_name);
// Show both arrays Original and Copied
// Original
console.log("Origin Array\n");
show_magicians(madician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
