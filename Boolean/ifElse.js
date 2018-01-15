var age = Number (prompt("What is your age?"));
var fullAge = age * 365.25;

//if age is negative
if(age < 0 ){
	console.log(" Come back once you're out of the womb");
}

//If age is 21
else if (age === 21){
	console.log (" Happy 21st Birthday! Have a free shot!");
}

// If age is odd
else if ( age % 2 !=0){
	console.log ("Your age is odd!");
}

// If age is a perfect square
else if ( age % Math.sqrt(age) ===0){
	console.log("Perfect Square!");
}
else{
	console.log("You are " + fullAge + " days old");
}
	