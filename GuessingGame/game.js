// create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");


//check if guess is correct
if (Number(guess) === secretNumber){
	alert("You got it right! Well done!")
}
// check if guess is higher
else if(Number(guess) > secretNumber){
	alert("Too high. Guess again");
}
else {
	alert("Too low. Guess again");
}

