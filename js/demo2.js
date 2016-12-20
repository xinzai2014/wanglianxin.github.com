$(function(){
	window.onResize=function(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
    }
    document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';

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

    //滑动轮播
    (function(){
        // var mySwiper = new Swiper('.swiper-container',{
        //     keyboardControl : true,
        // })
        // var swiper = new Swiper('.swiper-container', {
        //     pagination: '.swiper-pagination',
        //     paginationClickable: true,
        //     paginationBulletRender: function (swiper, index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + '</span>';
        //     }
        // });


        var tabsSwiper = new Swiper('.swiper-container', {
            speed: 500,
            onSlideChangeStart: function () {
                $(".c-logo .active").removeClass('active')
                $(".c-logo a").eq(tabsSwiper.activeIndex).addClass('active')
            }
        })
        $(".c-logo a").on('touchstart mousedown', function (e) {
            e.preventDefault()
            $(".c-logo .active").removeClass('active')
            $(this).addClass('active')
            tabsSwiper.swipeTo($(this).index())
        })
        $(".c-logo a").click(function (e){
            e.preventDefault()
        })



        $('.c-logo a').click(function () {
            $(this).addClass('active').siblings('a').removeClass('active');
        })
    })();
});


