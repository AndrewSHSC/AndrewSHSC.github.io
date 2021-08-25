(function ($, window, document) {

    $(document).ready(function () {

        setTimeout(function () {

            $carousel = $('.specialists-carousel .specialists-carousel__container');
            $leftArrow = $(".specialists-carousel .specialists-carousel-nav.-left");
            $rightArrow = $(".specialists-carousel .specialists-carousel-nav.-right");

            $carousel.slick({
                slidesToScroll: 1,
                slidesToShow: 3,
                //infinite: true,
                speed: 600,
                //autoplaySpeed: 4000,
                //autoplay: true,
                arrows: false
            });

        $leftArrow.click(function () {

            $carousel.slick('slickPrev');

        });

        $rightArrow.click(function () {

            $carousel.slick('slickNext');

        });

        }, 1000)

        


    });

})(window.jQuery, window, document);


