// Tests for equality and inequality with strings

console.log("Eqeality test:", ("Hammad ali" as string) === "Hammad ali");
console.log("Ineqeality test:", ("Hammad ali" as string) === "Imaran khan");
  
// Tests using the lower case function

console.log("LowerCase test:" , "HAMMAD ALI".toLowerCase() === "hammad ali");
 
//* Numberical tests invoivig equality and inquality, greater than and less than, greater than
 console.log("Equality:", 1000 === 1000); //Inquality
 console.log("Inequality test",(10 as number) !== 9); //Inquality
 console.log("greater than test", 100000 > 100); //Greater
 console.log("less than test", 10 < 100); // less than
 console.log("greater than and equals to test", 10 >= 10);
 console.log("less than and equal to test", 5 <= 10);
 
 //  Tests using "and" and "or" operators
 console.log("And operator test", true && true);
 console.log("Or operator test", true || false);
 
 
 
 // Test whether an item is in a array

 const car = [1, 2, 3];

 console.log("test number", car.includes(1));
 
 // Test whether an item is in a array

 const car1 = [1, 2, 3];
 
 console.log("test number",!car.includes(6));
 

 