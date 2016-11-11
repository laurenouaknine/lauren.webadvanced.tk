$("body").css("background-color", "blue");

for (var i = 0; i < 1000; i++){
    $("body").append("<div class = 'box'></div>")
}


var rotation = 0;

for (var i = 0; i < 10; i++){
    $("#body").append("div class='snowflake'></div>");
}


$(".snowflake").each(function() {
    var rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    var crystalcount = Math.floor(Math.random()*34) + 6;
    for(var c = 0; c < crystalcount; c++){
        $(this).append("div class='crystal'></div>");
    }
})


$(".crystal").each(function(){
    
        var newrotation = "rotate(" + rotation + "deg)";
        $(this).css("transform", newrotation);
        rotation += 180/$(".crystal").length;
});




var opacity = 0;

$(".box").slice(500).each(function(){
    opacity += .001;
    $(this).css("opacity",opacity);
   console.log("found box " + opacity); 
});


$(window).resize(function(){
    console.log("resized");
});

$(window).scroll(function(){
    console.log($(window).scrollTop());
});

$(window).mousemove(function(){
    console.log(event.clientX);
    console.log(event.clientY);
});



//window.scroll()