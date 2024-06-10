let guestArray:string[] = ["fatima","aisha","saba"];


let canNotAttend:string = "saba";

let newGuest : string = "fatima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;



guestArray.unshift("laiba");



let middleGuest:string = "aqsa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("saman");
console.log(guestArray);


console.log("we can invite only two peaple for dinner");

while(guestArray.length>2){
let removeguest = guestArray.pop();
console.log(`\nSorry ${removeguest} we can invite you to dinner!`);

};
guestArray.map((item)=> console.log(`\n${item}you are still invite to dinner!`));


guestArray.pop();
guestArray.pop();
console.log(guestArray);
