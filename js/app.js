$(document).foundation()

//smooth scroll function

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//sticky navigation bar function


$(document).ready(function () {
    var stickyNavTop = $('.navigation').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.navigation').addClass('sticky');
        } else {
            $('.navigation').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});
