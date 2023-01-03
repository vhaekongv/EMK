$(function(){




    $(".p_con3_wrap .but li").on("click",function(){

        i=$(this).index()
        
        $(".bg div").stop().fadeOut();
        $(".bg div").eq(i).stop().fadeIn(1000);

        $(".but li").removeClass("on")
        $(this).addClass("on")

    });


    $(".p_con3_wrap .but li").on("click",function(){

    i=$(this).index()

    box=$(".bg>div").hasClass("on")

    if(box==true){
        
        $(".bg>div").stop().fadeOut();
        $(".bg div").eq(i).stop().fadeIn(1000);

        $(".but li").removeClass("on")
        $(this).addClass("on")

    }
    else{
        $(".bg>div").stop().fadeOut();
        $(".bg div").eq(i).stop().fadeIn(1000);

        $(".but li").removeClass("on")
        $(this).addClass("on")

    }


    })



});