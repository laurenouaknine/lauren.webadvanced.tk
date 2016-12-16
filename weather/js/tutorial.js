var riseHours;
var riseMinutes;
var setHours;
var setMinutes;
var totalMin;


function getWeather() {
    var location = "11375";
    var currentTime = getCurrentTime();
		console.log( currentTime );
    

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        //The actual code
        } else {
            
            //Consolelogging everything (Sunrise, sunset, Code for clouds, text for clouds)
            console.log(data.query.results)
            console.log(data.query.results.channel.astronomy.sunrise);
            console.log(data.query.results.channel.astronomy.sunset);
            console.log(data.query.results.channel.item.condition.code);
            console.log(data.query.results.channel.item.condition.text);
            
            
            //SUNRISE HOURS & MINUTES
            console.log(data.query.results.channel.astronomy.sunrise);
            var sunRiseRaw = data.query.results.channel.astronomy.sunrise.substring(0, data.query.results.channel.astronomy.sunrise.length-3).split(":");
             riseHours =parseInt(sunRiseRaw[0],10);
             riseMinutes =parseInt(sunRiseRaw[1],10);
            
            console.log(riseHours);
            console.log(riseMinutes);

            //SUNSET HOURS & MINUTES
            var sunSetRaw = data.query.results.channel.astronomy.sunset.substring(0, data.query.results.channel.astronomy.sunset.length-3).split(":");
             setHours =parseInt(sunSetRaw[0],10) + 12;
             setMinutes =parseInt(sunSetRaw[1],10);
            
            console.log(setHours);
            console.log(setMinutes);
            
            //AMOUNT OF TIME BETWEEN SUNRISE AND SUNSET 
            totalMin = (setHours*60+setMinutes) - (riseHours*60+riseMinutes);
            console.log(totalMin);
           
           //Local Variables for weather
            var clouds = data.query.results.channel.item.condition.code;
            var sunrise = data.query.results.channel.astronomy.sunrise;
            var sunset = data.query.results.channel.astronomy.sunset;
            
    
            //STEP 1- Background color change

            //Getting minutes passed at current time to gradient to sunrise/sunset
                
            
            //Create function to turn Sunrise & Sunset into usefulMinutes
            
                //Getting minutes AT SUNRISE
                
                //Getting minutes AT SUNSET

            


            function backgroundColor ( currentTime ){
            //Making variables for HSL to get colors to gradient
            // var blue = HSL (265.9, 100, 3.7);
            // var yellow = HSL (74.4, 100, 92.9);
            
                //Getting minutes RIGHT NOW
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var usefulMinutes = ((hours * 60) + minutes);
                console.log(usefulMinutes);
                var inDay = (usefulMinutes - (riseHours*60+riseMinutes));
                console.log(inDay/totalMin);
                
                //Color HSL
                var H = 74.4; //start at yellow
                var S = 100;
                var L = 92.9;
                var maxHue = 265.9; //end at blue
                var minHue = 74.4; //yellow ending
                var minLuminosity = 3.7; //dark for blue
                var maxLuminosity = 92.9; //light for yellow
                var rangeLum = maxLuminosity - minLuminosity;
         		var rangeHue = maxHue - minHue;
         		var ratioLum = 100 / rangeLum;
         		var ratioHue = 100 / rangeHue;
         		var perHueAdj = (inDay / ratioHue) + minHue;
         		var perLumAdj = (inDay / ratioLum) + minLuminosity;
    
                document.body.style.backgroundColor = 'hsl('+ perHueAdj +','+ S +'%,'+ perLumAdj +'%)';
                
                
                 var timer = 0;
                 var counter = 0;
                    // COUNTER FOR SUNRISE
                    
                    //HUE
                    for (var H = 74.4; H < 265.9; H++) {
                        setInterval(function(){ 
                            console.log("Sunrise Check HUE"); 
                        }, timer);
                        timer += inDay;
                        counter++;
                    }//end of counter for sunrise
                    
                    
                    //LUM
                    for (var L = 92.9; L > 3.7; L--) {
                        setInterval(function(){ 
                            console.log("Sunrise Check LUM"); 
                        }, timer);
                        timer += inDay;
                        counter--;
                    }//end of counter for sunrise
                    
                    
                    // // COUNTER FOR SUNSET
                    
                    // //HUE
                    // for (var H = 265.9; H > 74.4; H--) {
                    //     setInterval(function(){ 
                    //         console.log("Sunset Check HUE"); 
                    //     }, timer);
                    //     timer += sunset;
                    //     counter--;
                    // }//end of counter for sunrise
                    
                    
                    // //LUM
                    // for (var L = 3.7; L < 265.9; L++) {
                    //     setInterval(function(){ 
                    //         console.log("Sunset Check LUM"); 
                    //     }, timer);
                    //     timer += sunset;
                    //     counter++;
                    // }//end of counter for sunrise
                    
                    
            }//end of backgroundColor function
            
            console.log(backgroundColor)
            
            
            
            
            
            
            
            //For bluriness
            if (clouds == 26){
                $("body").css("-webkit-filter", "blur(5px)");
            } else if (clouds == 27){
                $("body").css("-webkit-filter", "blur(10px)");
            } else if (clouds == 28){
                $("body").css("-webkit-filter", "blur(15px)");
            } else if (clouds == 29){
                $("body").css("-webkit-filter", "blur(20px)");
            } else if (clouds == 30){
                $("body").css("-webkit-filter", "blur(25px)");
            } else if (clouds == 31){
                $("body").css( "-webkit-filter", "blur(30px)");
            } //end of if blur statement
            
             
            
            $(".svg").show();
            
            
            
        }//end of else

    }); //end of $get
    
    
//Start of getCurrentTime
            
        function getCurrentTime() {

    		var now = new Date();
    		var dayMonth = now.getDate();
    		var meridien = "AM";
    		var hours = now.getHours();
    		var minutes = now.getMinutes();
    		var month = (now.getMonth()) + 1;
    		var start = new Date(now.getFullYear(), 0, 0);
    		var diff = now - start;
    		var oneDay = 1000 * 60 * 60 * 24;
    		var day = Math.floor(diff / oneDay);
    		var seconds = now.getSeconds();
    
    		if ( hours >= 12 ) {
    		    
    			meridien = "PM"
    			hours = hours - 12; 
    			
    		}//end of if statement
    
    		if (minutes < 10 ){
    			minutes = "0"+minutes;
    		} //end of if statement
    
    		return{
    		    hours : hours,
    			minutes : minutes,
    			meridien : meridien,
    			month : month,
    			day : day,
    			seconds : seconds,	
				dayMonth : dayMonth		
			}//end of return
        }//end the get current time
}//end of get weather function




getWeather();



// conditions for clouds:
    // 26	cloudy
    // 27	mostly cloudy (night)
    // 28	mostly cloudy (day)
    // 29	partly cloudy (night)
    // 30	partly cloudy (day)
    // 31	clear (night)