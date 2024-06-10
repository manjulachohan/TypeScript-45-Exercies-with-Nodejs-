var alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
} // pass
alien_color = "yellow";
if (alien_color === "green") {
    console.log("the player just earned 5 points.");
} // fail 
