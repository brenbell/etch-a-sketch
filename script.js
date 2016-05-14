
/* store value of container width/height */
var containerWidth = 300;
var containerHeight = 300;
var defaultGrid = 16;

$(document).ready(function () {
    $('button').on("click", function () {
        var num = parseInt(prompt("What size would you like your grid? Must be a number between 1 and 10"));
        createGrid(num);
        $('.grid').hover(function () {
            $(this).css("opacity", 0);
        }, function() {
            $(this).fadeTo("fast", 1);
        });
    });
    
});

function createGrid(gridSize) {
    $("#container > div").remove();
    var i = 0; 
	if (gridSize < 1 || gridSize > 10){
		alert("You entered an invalid number, silly!");
	
	} else {
        for (var i = 0; i < gridSize; i++) {
            for(var j = 0; j < gridSize; j++){
            $("#container").append("<div class='grid'></div>");
                console.log("box");
        }
            $("#container").append("<div class='newRow'></div>");
        }
        
        $(".grid").css("height", (400/gridSize - 2));
        $(".grid").css("width", (400/gridSize - 2));
        
};

};

