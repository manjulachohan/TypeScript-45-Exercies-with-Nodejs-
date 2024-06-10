var mypizza = ["cheeze pizza", "pepperoni pizza", "vegetarion pizza"];
// print only names of pizza
for (var i = 0; i < mypizza.length; i++) {
    console.log(mypizza[i]);
}
// printing names and sentence/massage
for (var i = 0; i < mypizza.length; i++) {
    console.log("I like to eat ".concat(mypizza[i]));
}
console.log("\nI really like to eat pizza. pizza comes in a veriety of flavors and toopings, allowing individuals to customize it to their liking");
