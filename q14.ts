let guestArray: string[] = ["laiba","maryem","adeeeba",];

let canNotArrend: string = "maryem";
console.log(`${canNotArrend} can not make it , for dinner`);

let newGuest: string = "asna";
guestArray[guestArray.indexOf(canNotArrend)]=newGuest;
console.log(guestArray);

guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));
