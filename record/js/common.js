/**
 * Created by qiuyun on 2017/8/25.
 */
$.ajax({
    url:'header.html',
    dataType:'html',
    success:function (data) {
        $('#header').html(data);
    }
});