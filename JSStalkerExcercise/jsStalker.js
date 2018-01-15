var userName = prompt("What is your Name?");
var userSurname = prompt("What is your Surname?");
var userAge = prompt("What is your age?");
var fullName = userName + " " + userSurname;

// don't need the next two lines
alert("Your full name is: " + userName + " " + userSurname);
alert("You are " + userAge + " years old");

//console.log("Your full name is: " + userName + " " + userSurname);
console.log("Your full name is: " + fullName);
console.log("You are " + userAge + " " + "years old");