$(function(){

/*상단메뉴고정*/

$(window).on("scroll",function(){
    var s=$(this).scrollTop()

    if(s>100){
        $("nav").addClass("on")
    }else{
        $("nav").removeClass("on")
    }

});

/*티켓하고스크롤고정*/

$(window).on("scroll",function(){
    var s=$(this).scrollTop()

    if(s>=500&&s<=2300){
        $(".fixed_t").addClass("on")
    }else{
        $(".fixed_t").removeClass("on")
    }

});

$(window).on("scroll",function(){
    var s=$(this).scrollTop()

    if(s>=500){
        $(".sctop").addClass("on")
    }else{
        $(".sctop").removeClass("on")
    }

});

/*스크롤탑*/

$(".sctop").on("click",function(){

    $("html, body").animate({scrollTop:0},"slow")
});


/*테블릿메뉴*/

var h=0;

$(".ham").on("click",function(){

    if(h==0){
        $(".tablet").stop().animate({"top":"0"},1000);
        $(".ham>div:nth-of-type(1)").stop().animate({"height":"0"},500);
        $(".ham>div:nth-of-type(3)").stop().animate({"height":"0"},500);



        h=1;
    }

    else{

        $(".tablet").stop().animate({"top":"-1500px"},1000)
        $(".ham>div:nth-of-type(1)").stop().animate({"height":"2px"},500);
        $(".ham>div:nth-of-type(3)").stop().animate({"height":"2px"},500);
        h=0;
    }

});

});

