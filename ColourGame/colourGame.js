var numSquares = 6;	
// the number 6 means how many colours we are generating	
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
	// mode Buttons Event Listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		}else{
			numSquares = 6;
		}
		reset();
	});
	}
}


function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
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
				messageDisplay.textContent = "Try Again";
			}
		});
	};
}

function reset(){
	//generate all new colours
	colours = generateRandomColours(numSquares);
	//pick new random colour from array
	pickedColour = pickColour();
	// change colourDisplay to match picked Colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours"; /* This makes the 'New Colours' appear 
	again after you've hit 'Play Again'*/
	//change colours of squares 
	messageDisplay.textContent = " ";
	for (var i = 0; i < squares.length; i++){
		if (colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});




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
















