$(function(){
    window.onResize=function(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
    }
    document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
    /*******750/2/100=********/
    //按钮
    (function(){
        $('#l_btn_one').click(function(){
            $('#l_public_out').show();
            $(this).hide();
            $('#l_btn_two').show();
        });
        $('#l_btn_two').click(function(){
            $('#l_public_out').hide();
            $(this).hide();
            $('#l_btn_one').show();
        })
        $('#l_public_out ul li').click(function(){
            $('#l_public_out').hide();
            $('#l_btn_two').hide();
            $('#l_btn_one').show();
        })

    })();

    //滑动屏幕
    (function(){
        $('.l_content_team ul').css({
            width:7*($('.l_content_team ul li').width())
            // ($('.l_content_team ul li').length)
        })
    })()








})