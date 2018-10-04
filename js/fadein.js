$(document).ready(function() {
    var winHeight;
    var all_fadein = $(".prepare_fadein");
    re_window();
    $(window).resize(function () {
        re_window();
    })
    $(window).scroll(function () {
        slideIn();
    })
    function slideIn(){
        var scrollTop = $(this).scrollTop();

        // var targetHeight = obj.offset().top;
        // if(scrollTop>targetHeight-winHeight+60){
        //     obj.animate({opacity:1},500);
        // }
        // console.log("obj.length"+all_fadein.length)

        for(var i = 0;i< all_fadein.length;i++){
            var targetHeight = all_fadein.eq(i).offset().top;
            if(!all_fadein.eq(i).data("opa")&&scrollTop>targetHeight-winHeight+100){
                all_fadein.eq(i).animate({opacity:1,filter:'Alpha(opacity=90)'},500);
                all_fadein.eq(i).data("opa",true);

            }
        }

    };
    function re_window() {
        if (window.innerHeight)
        {
            winHeight = window.innerHeight;
        }
        else if ((document.body) && (document.body.clientHeight)){
            winHeight = document.body.clientHeight;
        }
        $(".stair2").css({"height":winHeight + "px"});
    }
})


