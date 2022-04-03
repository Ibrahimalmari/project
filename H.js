$(document).ready(function(){
$("#cur").on("click",function(){
$(".complete").fadeToggle(2000).end();
});




var scroll = $("#scroll-top");
$(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
        scroll.fadeIn();
    }
    else {
        scroll.fadeOut();
    }
});
scroll.on("click", function () {
    $("body").animate({ scrollTop: 0 }, 1000).end();
});



$(window).scroll(function(){
    console.log($(window).scrollTop());
    
    });
    
    
});