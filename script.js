
/* store value of container width/height */
var containerWidth = 200;
var containerHeight = 200;
var defaultBoxes = 16;

$(document).ready(function(){
	createBoxes(defaultBoxes);
	$(".box").mouseenter(function(){
		$(this).css("background-color","blue");
	});
});

function createBoxes(numBoxes) {
	var i = 0; 
	if(numBoxes >= 200 || numBoxes <= 0){
		alert("You entered an invalid number, silly!");
	
	} else if (0 < numBoxes < 200) {
		/* Set boxes height and width relative to number of them */
		var boxHeight = 200 / numBoxes;
		var boxWidth = 200 / numBoxes;
		$('.box').height(boxHeight);
		$('.box').width(boxWidth);
			
			while(i < numBoxes){
				$("#container").append("<div class='box'></div>");
			console.log("Box created" + i);
			i++;
		};
	
	} else {
	 	alert("You entered something weird, man");
	 };
};

function reset() {
	var newGridSize = prompt("What size would you like the new grid? (Must be a number under 200, for example entering 64 would produce a 64x64 grid)");
	createBoxes(newGridSize);
};