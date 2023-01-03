$(function(){

    
    $(window).on("scroll",function(){
        var s=$(this).scrollTop()
        
        $(".scdown").css({"display":"block"})

        if(s>=450){
            $("#a_container2, h2").addClass("on")
            $(".scdown").css({"display":"none"})
        }else{
            $("#a_container2, h2").removeClass("on")
        }
    
    });

    $("#a_container1").on("mouseenter",function(){

        $(this).stop().animate({"opacity":"1","width":"80%"},1000)
    
    });

    $("#a_container1").on("mouseleave",function(){
        
        $(this).stop().animate({"opacity":"0.3","width":"70%"},1000)
    
    });

    


    $(".a_banner").on("mouseenter",function(){

        $(".banner_t p.on").css({"animation":"blink 1s infinite linear"})

        $(".banner_t p").addClass("on")
    
    });

    $(".a_banner").on("mouseleave",function(){    

        $(".banner_t p").css({"animation":"none"})
    
    });
        
});