var guestArray = ["laiba", "maryem", "adeeeba",];
var canNotArrend = "maryem";
console.log("".concat(canNotArrend, " can not make it , for dinner"));
var newGuest = "asna";
guestArray[guestArray.indexOf(canNotArrend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
