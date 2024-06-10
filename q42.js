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
// call make_great function to modify magicians names
var great_magicians = make_great(madician_names);
// call show_magicians that show modified list of magicians
show_magicians(great_magicians);
