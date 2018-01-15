if(jQuery){
	alert("jQuery Loaded!");
}else{
	alert("No jQuery :(");
}


// select all div and give a background colour of purple
$("div").css("backgroundColor", "purple");

// select all elements with class of "highlight" and give a width of 200px
$(".highlight").css("width", "200px");

// select the div with the id of "third" and give it an orange border 
$("#third").css("border", "2px solid orange");

// select the first div only and change it's font colour to pink
$("div:first-of-type").css("color", "pink");