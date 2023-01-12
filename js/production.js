$(function(){

    /*시놉시스*/
    var total=$("#p_container2>div").length;
    var i=0;

    start();

    function start(){

        time = setInterval(function(){
            if(i==total-1){
                i=0;
            }
            else{
                i++
            }
    
            $("#p_container2>div").fadeOut(1000)
            $("#p_container2>div").eq(i).fadeIn(1000)
            $(".synopsis_bar>li>div").css({"width":"0%"})
            $(".synopsis_bar>li>div").eq(i).stop().animate({"width":"100%"},2000)
            $(".synopsis_bar>li").css({"color":"#cbcbcbb3"},2000)
            $(".synopsis_bar>li").eq(i).stop().animate({"color":"#9d0000"},2000)
        },4000)

    }

    
    $(".synopsis_bar>li").on("click",function(){
        clearInterval(time);
              

        i=$(this).index()

            $("#p_container2>div").fadeOut(1000)
            $("#p_container2>div").eq(i).fadeIn(1000)

            $(".synopsis_bar>li>div").css({"width":"0%"})
            $(".synopsis_bar>li>div").eq(i).animate({"width":"100%"},1000)
            $(".synopsis_bar>li").css({"color":"#cbcbcbb3"},1000)
            $(".synopsis_bar>li").eq(i).animate({"color":"#9d0000"},1000)
            start(time)

        
    })

    /*캐스팅박스*/
    $(".but li").on("click",function(){
        m=$(this).index()

        $(".but li").removeClass("on")
        $(this).addClass("on")

        $(".bg>div").stop().fadeOut(1000)
        $(".bg>div").eq(m).stop().fadeIn(1000)

    })

    $("#p_container3").on("mouseenter",function(){

        $(".p_con3_wrap").addClass("on")
    })

    $("#p_container3").on("mouseleave",function(){
        
        $(".p_con3_wrap").removeClass("on")
    })

    $("#p_container4").on("mouseenter",function(){

        $(".p_con4_wrap").addClass("on")
    })
});
    


