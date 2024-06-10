// Define a function with a rest pararmeter that accept items arugments  respresenting our Sandwich

function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
 // call the function 3 times with 3 different number of arguments
 makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

 makeSandwich("Bread", "Butter");

 makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg", "Onion", "Tomato", "Lettuce");

