// Ripple-effect animation
(function ($) {
    $(".ripple-effect").click(function (e) {
        var rippler = $(this);
        //alert("hop");

        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;

        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    })
})(jQuery);

$(document).ready(function () {
    $('.wrapper-footer').click(function () {
        var thisHeight = $('.wrapper-footer').height();
        if ($('.wrapper-footer').hasClass('is-down')) {
            $('.wrapper-footer').addClass('is-up', 1000, 'easeOutBounce');
            $('.wrapper-footer').removeClass('is-down');
            thisHeight = $('.wrapper-footer').height();
            //$('.wrapper-footer').css('transform' , 'translatey( -' + thisHeight + 'px)');
            //$('.wrapper-footer').css('height' , thisHeight + 'px');
            $('.sub-overlay').css('height', '100vh');
            $('.slide-up').css('transform', 'rotate(180deg)');
        } else {
            $('.wrapper-footer').removeClass('is-up');
            $('.wrapper-footer').addClass('is-down', 1000, 'easeOutBounce');
            //$('.wrapper-footer').css('transform' , 'translatey(0)');
            //$('.wrapper-footer').css('height' , '110px');
            $('.sub-overlay').css('height', '0');
            $('.slide-up').css('transform', 'rotate(0)');
        }
    });

    $('.offer-1 button').click(function () {
        if ($('.offer-1').hasClass('chosen')) {
            console.log('chosen');
        } else {
            console.log('now chosen');
            $('.offer-2').removeClass('chosen');
            $('.offer-3').removeClass('chosen');
            $('.offer-4').removeClass('chosen');
            $('.offer-1').addClass('chosen');
        }
    });

    $('.offer-2 button').click(function () {
        if ($('.offer-2').hasClass('chosen')) {
            console.log('chosen');
        } else {
            console.log('now chosen');
            $('.offer-1').removeClass('chosen');
            $('.offer-3').removeClass('chosen');
            $('.offer-4').removeClass('chosen');
            $('.offer-2').addClass('chosen');
        }
    });

    $('.offer-3 button').click(function () {
        if ($('.offer-3').hasClass('chosen')) {
            console.log('chosen');
        } else {
            console.log('now chosen');
            $('.offer-1').removeClass('chosen');
            $('.offer-2').removeClass('chosen');
            $('.offer-4').removeClass('chosen');
            $('.offer-3').addClass('chosen');
        }
    });

    $('.offer-4 button').click(function () {
        if ($('.offer-4').hasClass('chosen')) {
            console.log('chosen');
        } else {
            console.log('now chosen');
            $('.offer-1').removeClass('chosen');
            $('.offer-2').removeClass('chosen');
            $('.offer-3').removeClass('chosen');
            $('.offer-4').addClass('chosen');
        }
    });

});