$(function(){

    
    $(".banner").on("mouseenter",function(){

        $(".banner_t p.on").css({"animation":"blink 1s infinite linear"})

        $(".banner_t p").addClass("on")
    
    });

    $(".banner").on("mouseleave",function(){    

        $(".banner_t p").css({"animation":"none"})
    
    });

        
});