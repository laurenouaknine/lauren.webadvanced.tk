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
            
            //Local Variables for weather
            var clouds = data.query.results.channel.item.condition.code;
            var sunrise = data.query.results.channel.astronomy.sunrise;
            var sunset = data.query.results.channel.astronomy.sunset;
            
            
            //SUNRISE HOURS & MINUTES
            console.log(data.query.results.channel.astronomy.sunrise);
            var sunRiseRaw = data.query.results.channel.astronomy.sunrise.substring(0, data.query.results.channel.astronomy.sunrise.length-3).split(":");
             riseHours =parseInt(sunRiseRaw[0],10);
             riseMinutes =parseInt(sunRiseRaw[1],10);
             var riseTotalMinutes = (riseHours*60)+(riseMinutes);
            
            
            console.log("Rise Hours = " + riseHours);
            console.log("Rise Minutes = " + riseMinutes);
            console.log("Total Rise Minutes = " + riseTotalMinutes);

            //SUNSET HOURS & MINUTES
            var sunSetRaw = data.query.results.channel.astronomy.sunset.substring(0, data.query.results.channel.astronomy.sunset.length-3).split(":");
             setHours =parseInt(sunSetRaw[0],10) + 12;
             setMinutes =parseInt(sunSetRaw[1],10);
             var setTotalMinutes = (setHours*60)+(setMinutes);
            
            console.log("Set Hours = " + setHours);
            console.log("Set Minutes = " + setMinutes);
            console.log("Total Set Minutes = " + setTotalMinutes)
            
            //AMOUNT OF TIME BETWEEN SUNRISE AND SUNSET 
            totalMin = (setHours*60+setMinutes) - (riseHours*60+riseMinutes);
            console.log("Time b/t rise & set = " + totalMin);
           
           
            //STEP 1- Background color change

            //Making variables for HSL to get colors to gradient
            // var blue = HSL (265.9, 100, 3.7);
            // var yellow = HSL (74.4, 100, 92.9);

            
                //Getting minutes RIGHT NOW
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                
                var usefulMinutes = ((hours * 60) + minutes);
                
                console.log("Minutes rn = " + usefulMinutes);
                
                //number of minutes from sunrise till now
                var inDay = (usefulMinutes - (riseHours*60+riseMinutes));
                console.log("Minutes since rise = " + inDay);
                
                //number of minutes from now until sunset
                var remainingDay = (setTotalMinutes - usefulMinutes);
                console.log("Minutes until set = " + remainingDay);
                
                //Color HSL
                //var H = 74.4; //start at yellow
                var S = 100;
                //var L = 92.9;
                var endHue = 240; //end at blue
                var startHue = 49; //yellow ending
                var endLuminosity = 13; //dark for blue
                var startLuminosity = 78; //light for yellow
                var rangeLum = startLuminosity - endLuminosity;
         		var rangeHue = endHue - startHue;
         		var ratioLum = inDay / rangeLum;
         		var ratioHue = inDay / rangeHue;
         		
         		var perHueAdj = (usefulMinutes*rangeHue)/totalMin;
         		var perLumAdj = (usefulMinutes*rangeLum)/totalMin;
         		
        //  		var perHueAdj = startHue + (inDay / rangeHue);
        //  		var perLumAdj = startLuminosity + (inDay / rangeLum);
         		
         		
         		
         		console.log("Lum Ratio = " + ratioLum);
         		console.log("Hue Ratio = " + ratioHue);
         		
         		console.log("Lum Range = " + rangeLum);
         		console.log("Hue Range = " + rangeHue);
         		
         		console.log("PHA = " + perHueAdj);
                console.log("PLA = " + perLumAdj);

         		
    
                document.body.style.backgroundColor = 'hsl('+ perHueAdj +','+ S +'%,'+ perLumAdj +'%)';
                
                
                // console.log(HueAbs);
                // console.log(LumAbs);
                
                //HUE
                
                
            
            
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