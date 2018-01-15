var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");



while (input !== "quit") {
	// handle input
	if( input === "list"){
		listTodos();
		
	}else if( input === "new"){
		addToDo();
		
	} else if (input === "delete"){
		deleteToDo();
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app");



function listTodos (){
	console.log("***********")
	todos.forEach(function(todo, i){
	console.log(i + " : " + todo);
	});
	console.log("***********")	
}

function addToDo (){
	// ask for new todos
	var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Todo Added");
}

function deleteToDo(){
	// ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	// delete that todo
	// splice() this makes a cut and removes elements out of an array from anywhere in the array
	todos.splice(index, 1);
	console.log("Deleted Todo");
	
}
