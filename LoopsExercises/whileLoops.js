console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var count = -10;

while ( count < 20 ){
	console.log(count);
	count++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var counter = 10;

while(counter <=40){
	console.log(counter);
		counter+=2;   // the counter only counts in even numbers so this is one way of doing it without the 'if' statement
}
 /* second way to print all even numbers:
 while(counter <=40){
	 if( counter % 2 = 0){
		 console.log(counter);
	 }
	counter+=1;
 */

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
var count = 300;

while (count <= 333){
	if (count % 2 !==0)
	console.log(count);
	count++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var count = 5;

while (count <51){
	if (count % 5 === 0 && count % 3 === 0 ){
		console.log(count);
		
	}
	count++;
} 