// Define a function to creat a car object with Optional Options...
function create_car(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    Options.forEach(function (Option) {
        var _a = Option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object 
var my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");
// Print the veriable to ensure all the imnformation is correctly in the car object
console.log(my_car);
