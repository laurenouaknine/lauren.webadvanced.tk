//MAKING THE DIV DRAGGABLE
$( "#input" ).draggable();

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.ceil(diff / oneDay);
console.log(day);
var counter = 0;

var x = Math.random() * $("body").width() + "px";
var y = Math.random() * $("body").height() + "px";

var food = [];
var dayArr = [];

if (Cookies.get('food')) {
	foodjson = JSON.parse(Cookies.get('food'));
	dayjson = JSON.parse(Cookies.get('day'));
	for (var i=0; i < foodjson.length; i++) {
		$("body").append("<div class='food" + counter + "'>" + foodjson[i] + "</div>");
		$(".food" + counter).css({"font-family": "Arial Black","font-size": "34pt", "position-top": y, "position-left": x});
	};
}

$(".go").click(function(e) {
	food.push($(".food-input").val());
	dayArr.push($(".day-input").val());
	$("body").append("<div class='food" + counter + "'>" + $(".food-input").val() + "</div>");
	$(".food" + counter).css({"font-family": "Arial Black","font-size": "34pt", "top": y, "left": x});
	counter++;
	Cookies.set('food', food );
	Cookies.set('day', dayArr );
});



		
		// if (now == dayArr){
		// 	$('food').remove();
		// 	food = [];
		//     dayArr = [];
		//     Cookies.get('food', food);
		//     Cookies.get('day', dayArr);
		//     alert("cookies have been deleted");
		// }


// //Capturing the value of the input and appending it to the body paragraph
// $('.go').click(function(e){

// 	food = $(".food-input").val();
// 	day = $(".day-input").val();

// 	var x = Math.random() * $("body").width() + "px";
// 	var y = Math.random() * $("body").height() + "px";

// 	$('body').append("<div class='food" + foodCount + "'>" + food + "</div>");
// 	$('body').append("<div class='day" + foodCount + "'>" + day + "</div>");
// 	$(".food" + foodCount).css({"font-family": "Arial Black","font-size": "34pt", "top": y, "left": x});
// 	$(".day" + foodCount).css({"font-family": "Arial Black","font-size": "34pt", "top": y, "left": x});
// 	foodCount++;
// 	console.log(food);
// 	console.log(day);

// }); //end of "GO" (click) function


//COOKIE CSS TRANSITION
// http://stackoverflow.com/questions/16615273/load-css-classes-with-transitions-from-cookies-without-transitioning-into-them

		//Getting day out of the year
