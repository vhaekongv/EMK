$(function(){

/*작동안함 -달력*/
$(".days li").on("click"),function(){

    $(".days li").removeClass("active")
    $(this).addClass("active")
}

$("#t_container1").on("mouseenter",function(){

    $(this).children("img").addClass("on")

})

$("#t_container1").on("mouseleave",function(){

    $(this).children("img").removeClass("on")

})

$("#t_container3").on("mouseenter",function(){

    $(".review_t").addClass("on")

})

$("#t_container3").on("mouseleave",function(){

    $(".review_t").removeClass("on")

})


});
