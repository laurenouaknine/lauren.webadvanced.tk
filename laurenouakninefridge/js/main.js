//MAKING THE DIV DRAGGABLE

window.onload = function (){

	$( function() {
    $( "#input" ).draggable();
 	 });
}




//Capturing the value of the input and appending it to the body paragraph
//$('.go').click(function(e){

	//food = $(".food-input").val();
	//day = $(".day-input").val();

	// var x = Math.random() * $("body").width() + "px";
	// var y = Math.random() * $("body").height() + "px";

	// $('body').append("<div class='food" + foodCount + "'>" + food + "</div>");
	// $('body').append("<div class='day" + foodCount + "'>" + day + "</div>");
	// $(".food" + foodCount).css({"font-family": "Arial Black","font-size": "34pt", "top": y, "left": x});
	// $(".day" + foodCount).css({"font-family": "Arial Black","font-size": "34pt", "top": y, "left": x});
	//foodCount++;
	// console.log(food);
	// console.log(day);

//}); //end of "GO" (click) function


//COOKIE CSS TRANSITION
// http://stackoverflow.com/questions/16615273/load-css-classes-with-transitions-from-cookies-without-transitioning-into-them

		//Getting day out of the year
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
		    
		    for ( now == dayjson ){
		    		Cookies.remove('food');
		    }
		};
		


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









//COOKIES

	//Sets a cookie:
	// cookies.set('name', 'value');

		//Creates a cookie that expires 7 days from now
	// cookies.set('sellby', 'numOfSeconds', { expires: (d - day) });

	// 	//Gets the value of a specific cookie
	// cookies.get('name'); // => 'value'

	// 	//Reads all cookies
	// cookies.get(); // => { name: 'value' }

	// if (numOfSeconds = day){
	// 	cookies.remove('foodInput');
	// }
	// // 	//Deletes a cookie
	// // cookies.remove('name');

		//DOT EXAMPLE

		// 	Cookies.set('hello', 'world');

		// $(window).click(function(e){

		// 	console.log(e.clientX);
		// 	console.log(e.clientY);
		// 	Cookies.set('xval', e.clientX);
		// 	Cookies.set('yval', e.clientY);

		// 	$(".dot").css("top", e.clientY).css("left", e.clientX);
		// });














	// //SET COOKIE FUNCTION
	// function storeValues(foodcookie){
	// 	setCookie("foodInput", form.foodInput.value);
	// 	return true; 
	// 	console.log( foodcookie );
	// }
	

	// function storeValues(daycookie){
	// 	setCookie("dayInput", form.dayInput.value);
	// 	return true; 
	// 	console.log( daycookie );
	// }





	// function getCookie(name)
 //  {
 //    var re = new RegExp(name + "=([^;]+)");
 //    var value = re.exec(document.cookie);
 //    return (value != null) ? unescape(value[1]) : null;
 //  }



 //  cookies.set('sellby', 'numOfSeconds', { expires: (d - day) });


	//DISPLAY THE FORM AS BEFORE, WITH NO VALUES ENTERED

	// function ClearFields(){
	// 	document.getElementById("food").value = "";
	// 	document.getElementById("day").value = "";
	// }

	// if(foodInput = getCookie("foodInput")) document.myForm.foodInput.value = foodInput;


	// if(dayInput = getCookie("dayInput")) document.myForm.dayInput.value = dayInput;









	// //save date&title in a cookie
	// numOfSeconds = day;
	// var d = new Date();
	// console.log(d);








// Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.


 //  function setCookie(name, value)
 //  {
 //    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
 //  }


 //  function storeValues(form)  
 //  {
 //    setCookie("food", form.food.value);
 //    setCookie("day", form.day.value);
 //    return true;
 //  }

 //  if(food = getCookie("food")) document.myForm.food.value = food;
 //  if(day = getCookie("day")) document.myForm.day.value = day;


 //  var expired = new Date().getTime(); // less 24 hours

 //  function deleteCookie(name)
 //  {
 //    document.cookie=name + "=null; path=/; expires=" + expired.toGMTString();
 //  }



	// function clearCookies()
	//   {
	//     deleteCookie("food");
	//     deleteCookie("day");
	//     alert('Your cookies have been deleted!');
	//   }


 //  function getCookie(name)
 //  {
 //    var re = new RegExp(name + "=([^;]+)");
 //    var value = re.exec(document.cookie);
 //    return (value != null) ? unescape(value[1]) : null;
 //  }


 //  document.write(getCookie("food"));










// .css({"top": y, "left": x})

// function insert ( ) {
//  food.push( foodInput.value );
//  day.push( dayInput.value );
  
//  clearAndShow();
// }


// var messageBox  = document.getElementById("display");


// function clearAndShow () {
//   // Clear our fields
//   foodInput.value = "";
//   dayInput.value = "";
  
  
//   // Show our output
//   messageBox.innerHTML = "";
  
//   // messageBox.innerHTML += "Food: " + food + "<br/>";
//   // messageBox.innerHTML += "Day: " + day + "<br/>";

// }




// function appendText() {
//     // var txt1 = "<p>Text.</p>";              // Create text with HTML
//     // var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
//     // var txt3 = document.createElement("p");
//     food.innerHTML = "Text.";               // Create text with DOM
//     $("body").append(food, day);     // Append new elements
// }


//  $("button").click(function(){
//     $("body").append(foodInput);
//     $("body").append(dayInput);
// });


// $(".go").click(function() {
// 	console.log($(".food").val());
// 	console.log($(".day").val());

// })



// var food = document.getElementById("food");
// var day = document.getElementById("day");
// var myArray = [ food, day ];
// console.log( myArray )

// function writeFood ()

// make an array for food & day. store values in array (push name and value)

// TO DO:

// if a name is put into text, print it to the console
// if a name and a date are input, set time out for date of input






//COOKIES
		// 	Cookies.set('hello', 'world');

		// $(window).click(function(e){

		// 	console.log(e.clientX);
		// 	console.log(e.clientY);
		// 	Cookies.set('xval', e.clientX);
		// 	Cookies.set('yval', e.clientY);

		// 	$(".dot").css("top", e.clientY).css("left", e.clientX);
		// });