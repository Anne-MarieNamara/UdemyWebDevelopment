/* var answer = prompt("are we there yet?");

while ( answer !== "yes" && answer !== "yeah"){
	var answer = prompt("Are we there yet?");
}
alert("Yay! We made it!!!"); */

var answer = prompt("are we there yet?");

while ( answer.indexOf("yes") === -1){ // this means the yes does not exist inside of our answer
	var answer = prompt("Are we there yet?");
}
alert("Yay! We made it!!!");