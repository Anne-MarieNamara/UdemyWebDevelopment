var colours = generateRandomColours(6);
// the number 6 means how many colours we are generating
var numSquares = 6;			
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.background = colours[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colours[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colours
	colours = generateRandomColours(numSquares);
	//pick new random colour from array
	pickedColour = pickColour();
	// change colourDisplay to match picked Colour
	colourDisplay.textContent = pickedColour;
	this.textContent = "New Colours"; /* This makes the 'New Colours' appear 
	again after you've hit 'Play Again'*/
	//change colours of squares 
	messageDisplay.textContent = " ";
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++){
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];
	
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		
		
	// grab colour of clicked square
	var clickedColour = this.style.backgroundColor;
	// compare colour to pickedColour
	console.log(clickedColour, pickedColour);
	
	if (clickedColour === pickedColour){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColours(clickedColour);
		h1.style.backgroundColor = clickedColour;
	}else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again"
	}
	});
}

function changeColours(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
	// Change each colour to match given colour
		squares[i].style.backgroundColor = color;
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	// Make an array
	var arr = []
	// add num random colours to array
	for (var i = 0; i < num; i ++){
	// get random colour and push into array
	arr.push(randomColour())
	}
	// return that array
	return arr;
}


function randomColour(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}
















