// name array
var guestArray = ["laiba", "maryem", "adeeba"];
// can not make dinner
var canNotArrend = "maryem";
// invite new guest
var newGuest = "asna";
guestArray[guestArray.indexOf(canNotArrend)] = newGuest;
// sand message
// guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));
console.log("wellcome all we found a bigger dinner table!");
guestArray.unshift("sara");
var middleGuest = "maryam";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("areeba");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
