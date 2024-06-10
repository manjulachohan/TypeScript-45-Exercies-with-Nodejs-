// name array
let guestArray: string[] = ["laiba","maryem","adeeba"];

// can not make dinner
let canNotArrend: string = "maryem";

// invite new guest
let newGuest: string = "asna";
guestArray[guestArray.indexOf(canNotArrend)]=newGuest;

// sand message
// guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));

console.log("wellcome all we found a bigger dinner table!");

guestArray.unshift("sara");

let middleGuest: string = "maryam";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("areeba");

guestArray.map ((item)=> console.log(`\nDear ${item} you are invited to dinner!`));






