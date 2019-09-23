$(function () {
    function ScollPostion() { //滚动条位置
        var t, l, w, h;
        if(document.documentElement && document.documentElement.scrollTop) {
            t = document.documentElement.scrollTop;
            l = document.documentElement.scrollLeft;
            w = document.documentElement.scrollWidth;
            h = document.documentElement.scrollHeight;
        } else if(document.body) {
            t = document.body.scrollTop;
            l = document.body.scrollLeft;
            w = document.body.scrollWidth;
            h = document.body.scrollHeight;
        }
        return {
            top: t,
            left: l,
            width: w,
            height: h
        };
    }
    var floattop = $("#floatNav").offset().top;
    var arrtop = [];
    for(var i=0;i<$('.float').length;i++){
        arrtop.push($('.float').eq(i).offset().top-100);
    }
    $(window).scroll(function() {
        if(ScollPostion().top>floattop){
            $('.floainner').addClass('active');
            if(ScollPostion().top>arrtop[0]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(0).addClass('active');
            }
            if(ScollPostion().top>arrtop[1]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(1).addClass('active');
            }
            if(ScollPostion().top>arrtop[2]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(2).addClass('active');
            }
            if(ScollPostion().top>arrtop[3]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(3).addClass('active');
            }
            if(ScollPostion().top>arrtop[4]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(4).addClass('active');
            }
            if(ScollPostion().top>arrtop[5]){
                $('.floatNav li').removeClass('active');
                $('.floatNav li').eq(5).addClass('active');
            }
        }else {
            $('.floainner').removeClass('active');
            $('.floatNav li').removeClass('active');
        }

    });
    var body = $('html,body');
    $('.floatNav li').on('click',function () {
        $('.floatNav li').removeClass('active');
        $('.floatNav li').eq($(this).index()).addClass('active');
        body.animate({
            scrollTop:arrtop[$(this).index()]+4
        }, 1000);
    })
})