// Define a function to creat a car object with Optional Options...

function create_car(manufacturer, model, ...Options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    Options.forEach(Option =>{
        let [Key, value] = Option.split(":")
        car[Key.trim()] = value.trim();
    });

return car;

}

// Call the function to create a car object 

let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024")

// Print the veriable to ensure all the imnformation is correctly in the car object
console.log(my_car);
