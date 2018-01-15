console.log("Is Even function");

function isEven(num){
	if( num % 2 === 0){
	 num = true;	
	}
	else {
	 num = false;
	}
	return num;
}

console.log("factorial function");

function factorial(num){
	// define a result variable
	var result = 1;
	for ( var i = 2; i <= num; i++){
		result = result * i; // or you could put result *= i;
	}
	// return the result variable
	return result;
}



console.log ("kebab to Snake Case");
function kebabToSnake(str){
	var result = str.replace (/-/g, "_");
	return result;
}

//("hello-world") to //"hello_world"
//("dogs-are-welcome") to // "dogs_are_welcome"
