var value2 = 0;
$('.img_bg').rotate({
    bind: {
        click: function(){
            value2 +=90;
            $(this).rotate({
                animateTo: value2
            });
        }
    }
});