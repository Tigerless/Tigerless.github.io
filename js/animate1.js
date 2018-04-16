

// var scrollY = 0;
var angle = 0;


window.onscroll = function() {

    //animate1

    var scrollY = window.scrollY;
    console.info(scrollY);
    if(scrollY < 500){
        var alpha = 1 - scrollY/400;
        var width_reduce = scrollY/4*3;
        var height_reduce = width_reduce/2;
        var refer_reduce = height_reduce*5/7;//相对点减少度
        // console.log('h12:'+scrollY);
        // head animate :506为不动点，1440*717高度
        if(alpha<0){
            alpha = 0
        }
        $(document).ready(function(){
            $("#main_head").fadeTo(30,alpha);
            $("#ball_nebula").animate({left: -135+width_reduce/2+'px', top: -10 + refer_reduce +'px', width: (1201-width_reduce)+'px'},20);

        });
    }

    //animate2
    angle = scrollY/1100*360;
    if(scrollY < 1100){
        $('.img_bg').rotate(angle);
        $('#content1_img1').rotate(-angle);
        $('#content1_img2').rotate(-angle);
        $('#content1_img3').rotate(-angle);
        $('#content1_img5').rotate(angle);

    }
}

