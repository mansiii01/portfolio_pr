$(window).scroll(function(){
    if($(document).scrollTop() > 40){
        $(".navbar").css("background-color", "black")
        $("#rocket").css("margin-top", "-1000px")
        $("#rocket").css("transition", "3s")
    }
    else{
        $(".navbar").css("background-color", "transparent")
        $("#rocket").css("margin-top", "-0%")
        $("#rocket").css("transition", "3s")
    }
})
