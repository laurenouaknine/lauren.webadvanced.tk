console.log("hello world");


// var timer = 0;
// var counter = 0;
// var numbers = [];

// for (var x = 0; x < 100; x++) {
//   numbers.push(x);
// }

// console.log(numbers);


const commands = [
    { emoji: '🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊', name: 'pizza' },
    { emoji: '🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺', name: 'beer' },
    { emoji: '🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢', name: 'poo' },
    { emoji: '🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙', name: 'octo' },
    { emoji: '🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠🐠', name: 'fish' }
];

{
    // Create custom commands
    commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));
    
}


// var timer = 0;
// var counter = 0;


// for (var s = 0; s < 1500; s++) {
//     setTimeout(function() {
//         var snow = "";

// 	for (var s=0; s < 1; s++) {
// 	    console.pizza("");
// 		}

// 	for (var s=0; s < 1; s++) {
// 	    console.beer("");
// 		}

// 	for (var s=0; s < 1; s++) {
// 	    console.poo("");
// 		}

// 	for (var s=0; s < 1; s++) {
// 	    console.octo("");
// 		}

// 	for (var s=0; s < 1; s++) {
// 	    console.fish("");
// 		}

//     }, 5000);
//     timer += 100;
//     counter++;
// }






// var timer = 0;
// var counter = 0;

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         var snow = "";
//         for (var s = 0; s < 10; s++) {
// 	        if (s = 1) {
// 		    console.pizza("");
// 				}

// 			else if (s = 2) {
// 			    console.beer("");
// 				}

// 			else if (s = 3) {
// 			    console.poo("");
// 				}

// 			else if (s = 4) {
// 			    console.octo("");
// 				}

// 			else if (s = 5) {
// 			    console.fish("");
// 				}
//         }
       
//     }, 1000);
//     timer += 1;
//     counter++;
// }

var timer = 0;
var counter = 0;

for (var i = 0; i < 2000; i++) {
    setTimeout(function() {

        var snow = "";
        for (var s = 0; s < 100; s++) {
            if (Math.random()*100 < 20) {
                snow += console.pizza("");
            } 

            else if (Math.random()*100 > 20 && Math.random()*100 < 40) {
                snow += console.beer("");
            }

            else if (Math.random()*100 > 40 && Math.random()*100 < 60) {
            	snow += console.poo("");
            }

            else if (Math.random()*100 > 60 && Math.random()*100 < 80) {
            	snow += console.octo("");
            }

            else if (Math.random()*100 > 80 && Math.random()*100 < 100) {
            	snow += console.fish("");
            }
    
        }
        console.pizza("");
    }, 5000);
    timer += 800;
    counter++;
}













// for (var i = 0; i < 1; i++) {
//     setTimeout(function() {
//         var snow = "";
//         for (var s = 0; s < 1; s++) {
//             if (s = 1) {
//                 snow += console.pizza("");
//             } 
            
//             else if (s = 2) {
//                 snow += console.beer("");
//             }

//             else if (s = 3){
//                 snow += console.poo("");
//             }

//             else if (s = 4){
//                 snow += console.octo("");
//             }
            
//             // else if (Math.floor()*100 > 150 && Math.floor()*100 < 250) {
//             //     snow += console.poo("");
//             // }
            
//         }
//     }, timer);
//     timer += 1;
//     counter++;
// }








// for (var i=0; i < 1; i++) {
//     console.pizza("");
// }

// for (var i=0; i < 1; i++) {
//     console.beer("");
// }

// for (var i=0; i < 1; i++) {
//     console.poo("");
// }

// for (var i=0; i < 1; i++) {
//     console.octo("");
// }


// for (var i=0; i < 10; i++) {
//     if (i = 1) {
//         console.log(console.pizza(""));
//     }
    
//     else if (i = 2){
//         console.log(console.beer(""));
//     }
// }


// for (var i=0; i<100; i++) {
//     setTimeout(function() {
// var snow = "";
// for (var s=0; s<40; s++) {
//     if (Math.random()*100<70) {
//         snow += "*";
//     } else {
//         snow += " ";
//     }
// }
//     console.log(snow);

//     }, timer);
//     timer += 40;
//     counter++;
// }







// for (var x = 0; x < 100; x++) {
//     numbers.push(x);
// }

// var snow = "";
// for(var s = 0; s < 40; s++){
//     snow += "*";
// }
// console.log(snow);

// for (var i = 0; i < 100; i++){
//     setTimeout(function(){
//         // console.log(numbers.shift()) 
//         console.log(" *** *** **     * *** *")
// }, timer);
//     timer += 100;
//     counter ++;
// }








// setTimeout(function(){
//   console.log("You made it...") 
// }, (Math.random()*5000));




// setTimeout(function(){
//   console.log("You made it...") 
// }, 3000);

// setInterval(function(){
//   console.log("You made it..." + counter)
        // counter++;
// }, 300);





// var user = "lauren";
// var password = "letmein";
// var i = 0;

// var lastnum = false;

// IF/ELSE STATEMENTS
// if(user == "lauren" && password == "letmein") {
//     console.log("you made it...");
// } else {
//     if (user == "lauren"){
//         console.log("Sorry, wrong password.");
//     } else {
//         console.log("Sorry, wrong username.");
//     }
// }

// FOR LOOP
// for (var i=0; i < 10; i++) {
//     console.log(i);
// }

//WHILE LOOP
// while (i < 10) {
//     console.log(Math.floor(Math.random()*10));
//     i++;
// }

// for (i = 0; i < 1000; i++){
//     var newnum = Math.floor(Math.random()*10);
//     while (lastnum == newnum){
//         // console.log("duplicate detected")
//         newnum = Math.floor(Math.random()*10);
//     }
//     console.log(newnum);
//     lastnum = newnum;
// }




// var commands = [
//   [ "unicorn", "🦄" ],
//   [ "pizza", "🍕" ],
//   [ "beer", "🍺"],
//   [ "poo", "💩"]
// ];

// (function() {
//   if(!window.console) return;

//   Create custom commands
//   commands.forEach(function(command) {
//     window.console[command[0]] = function() {

//       // Get arguments as a string
//       var args = Array.prototype.slice.call(arguments).toString().split(',').join(', ');

//       // Log to the console with emoji
//       console.log(command[1] + "  " + args);
//     }
//   });
// })();

// // Log to the console!
// console.unicorn("Magical!");
// console.beer("Cheers!");
// console.pizza("Tasty!");
// console.poo("Oh f*ck!");

//https://ines.io/blog/custom-console-logging-emoji