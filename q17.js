var guestArray = ["fatima", "aisha", "saba"];
var canNotAttend = "saba";
var newGuest = "fatima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("laiba");
var middleGuest = "aqsa";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("saman");
console.log(guestArray);
console.log("we can invite only two peaple for dinner");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nSorry ".concat(removeguest, " we can invite you to dinner!"));
}
;
guestArray.map(function (item) { return console.log("\n".concat(item, "you are still invite to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
