$(document).ready(function(){
    $('.main_slick').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        arrows : false,
        respondTo: 'min',
        pauseOnDotsHover: true,
        dots: true
    });

    $(function() {
        $('.header_select').styler();
    });

    let $inp = $('.social_footer__form--input');
    let $form = $('.social_footer__form');

    $inp.focus(function() {
        $form.css({
            'box-shadow': '7px 7px 10px 0px #d9be8f,  -7px 7px 10px 0px #d9be8f, 8px -6px 10px 0px #d9be8f, -7px -7px 10px 0px #d9be8f'
        });
    });

    $inp.blur(function() {
        $form.css({
            'box-shadow': 'none'
        });
    });

    let $menuTop = $('.menu-block__nav-list');
    let $buttonTopMenu = $('.icon_menu');

    $buttonTopMenu.on('click', function() {
        $menuTop.stop(true).slideToggle();
    });

    $(window).resize(function() {

        let $width = $(window).width();

        if($width >= 794){
            $menuTop.css({'display': 'block'});
        }
        else {
            $menuTop.css({'display': 'none'});
        }

    });

    let $select = $('.select_box');
    let $social = $('.social_menu');
    let $buttonPlus = $('.icon_plus');

    $buttonPlus.on('click', function() {
        $select.stop(true).slideToggle();
        $social.stop(true).slideToggle();
    });

    $(window).resize(function() {

        let $width = $(window).width();

        if($width >= 794){
            $select.css({'display': 'block'});
            $social.css({'display': 'block'});
        }
        else {
            $select.css({'display': 'none'});
            $social.css({'display': 'none'});
        }

    });

    let $footerH4 = $('.block_menu__h4:not(.notToggle)');
    let $footerList = $('.block_menu__list');

    $footerH4.on('click', function() {
        $footerList.slideUp();
        $(this).next().stop(true).slideToggle();
    });

    $(window).resize(function() {

            let $width = $(window).width();

        if($width >= 544){
            $footerList.css({'display': 'block'});
        }
        else {
            $footerList.css({'display': 'none'});
        }

    });

    $(window).resize(function() {

        let $width = $(window).width();
        let $dots = $('.slick-dots');

        if($width >= 675){
            $dots.css({'display': 'block'});
        }
        else {
            $dots.css({'display': 'none'});
        }

    });

        let $width = $(window).width();
        let $dots = $('.slick-dots');

        if($width >= 675){
            $dots.css({'display': 'block'});
        }
        else {
            $dots.css({'display': 'none'});
        }



    let OK = $('.flyButton');

    $(window).scroll(function() {

        let scrollOK = $(this);
        if (scrollOK.scrollTop() < 400) {
            if(OK.attr('data-anim') == '1'){
                OK.removeClass('OKaktiv').addClass('Offaktiv');
            }
        }
        else {
            OK.addClass('OKaktiv').removeClass('Offaktiv');
        }
    });

    $(window).scroll(function() {

        let scrollOK = $(this);
        if (scrollOK.scrollTop() < 400) {
            OK.attr('data-anim', '0');
        }
        else {
            OK.attr('data-anim', '1');
        }
    });

    OK .mouseenter(function() {
        $(this).css({opacity: 1});
    })
        .mouseleave(function(){
            $(this).css({opacity: 0.5});
        });

    OK.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    });
});