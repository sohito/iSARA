

$(function() {
    $('.acordion-menu').on('click', function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass('open');
    });

    var pageTop = $('.page-top');
    pageTop.hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            pageTop.fadeIn()
        } else {
            pageTop.fadeOut()
        }
    });
    pageTop.on('click', function() {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});

