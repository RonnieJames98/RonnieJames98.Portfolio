$("nav p").click(function(){
    
    $("nav ul").toggleClass("show");
    
});


function movingBackground(){
    var headerWidth = document.getElementById("header").offsetWidth;
    console.log(headerWidth);
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    
    if(headerWidth > 1100){
        $("#header").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('#header').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
    } else {
        console.log("Nope");
        $("#header").off("mousemove");
        $('#header').css("background-position", "center");
    }
}

setInterval(movingBackground, 500);