// Makeing a Function

function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
    
}

// Calling a function with by-defualt vaues
make_shirt();

// Calling a function now with Medium siza and defualt message
make_shirt("Medium")

// Calling a function now with Small siza and also Different Print Message
make_shirt("Small", "I love javaScript")