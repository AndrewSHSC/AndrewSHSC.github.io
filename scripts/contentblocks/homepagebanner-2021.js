$(document).ready(function () {

    var $searchBox = $('.search-box');

    /* Configure banner vidoe */

    if (window.matchMedia('(min-width: 992px)').matches) {

        var video = $('.m-homepagebanner-2021__video-container video').get(0);
        video.load();
        video.play();

    }

    /* Configure homepage slider */

    $('.home-slider').slick({

        adaptiveHeight: true,
        autoplaySpeed: 4000,
        speed: 800,
        arrows: false,
        dots: false,
        infinite: true,
        mobileFirst: true,
        responsive: true,
        //fade: true

    });

    $searchBox.on("click", function () {

        if (!$searchBox.hasClass("-active")) {

            $searchBox.addClass("-active");
            $searchBox.find("input").focus();

        }
        

    });

    setTimeout(function () {

        $('.home-slider').slick('slickPlay');

    }, 3500)

    /* Events */

    // On scroll
    $(window).scroll(function () {

        if ($(document).scrollTop() > 0) {

            $(".m-homepagebanner-2021__prompt").addClass("m-homepagebanner-2021__prompt--hidden");

        } else {

            $(".m-homepagebanner-2021__prompt").removeClass("m-homepagebanner-2021__prompt--hidden");

        }

    });

});