console.log("printReverse()");
/* is supposed to print out the array in reverse */

var numbers = [1,2,3,4];

function printReverse(numbers){
for(var i = numbers.length -1; i>= 0; i--){
	console.log(numbers[i]);
	}
}


/* call it here with array inside the ()*/

printReverse([3,6,2,5]);

console.log("isUniform()");
/* Write a function which takes in an array as an argument and returns
true if all elements in the array are identical// */

/*   Answer should look like this:
isUniform ([1,1,1,1]); // true
isUniform ([2,1,1,1]); // false
isUniform (["a", "b", "p"]); // false
isUniform (["b", "b", "b"]); // true
*/



function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i<arr.length; i++){
		
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

/* to call this function you must type it in the web console like this:
	isUniform([1,1,1,1]); then hit enter
	answer should be: true

 */

console.log("Sum Array()"); 

/* Write a function sumArray() that accepts an array of numbers and returns
the sum of all numbers in the array  */

/* Answer should look like this:

sum Array ([1,2,3 ]); //6
sum Array ([10,3,10,4 ]); //27
sum Array ([-5, 100 ]); //95

variable called result
 */
 
 
 function sumArray(arr){
	 var total = 0;
	 arr.forEach(function(element){
		 total += element;
	 });
	return total; 
 }
 
 
 console.log("Max()");
 /* Write a function max() that accepts an array of numbers and returns
 the maximum number in the array */
 
 /* Answer should look like this:

 max ([1,2,3]);  //3
 max ([10,3,10,4]);  //10
 max ([-5, 100]);  //100

 need a loop and variable to store the max and update that variable each time
 */
 
 function max(arr){
	var max = arr[0];
	for(var i =1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;	
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 