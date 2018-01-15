// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	// Use on() not click because there may be some li's added dynamically 
	//and so you have to specify the ul not the li because all the li's aren't there yet
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Moving data from the input box into a new li
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText =($(this).val());
		$(this).val(" ");
		//create a new li and add ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});