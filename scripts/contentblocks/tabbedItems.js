(function ($) {
  $(function () {
    tabbedItems();
  });

  function tabbedItems() {
    function mobileCarousel() {
      $(".m-tabbedItems .tabItem .inner").slick({
        arrows: false,
        slidesToScroll: 1,
        infinite: false,
        draggable: true,
        dots: true
      });
    }

    function desktopCarousel() {
      $(".m-tabbedItems .tabItem .inner").slick({
        arrows: true,
        slidesToScroll: 1,
        infinite: false,
        draggable: true,
        dots: true,
        slidesPerRow: 4,
        rows: 2,
        responsive: [
          {
            breakpoint: 1230,
            settings: {
              slidesPerRow: 3,
              rows: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesPerRow: 2,
              rows: 2
            }
          }
        ]
      });
    }

    if ($(window).width() < 500) {
      mobileCarousel();
    } else {
      desktopCarousel();
    }

    matchMedia("screen and (min-width:500px)").addListener(function (
      mediaQuery
    ) {
      if (mediaQuery.matches) {
        $(".m-tabbedItems .tabItem .inner").slick("unslick");
        desktopCarousel();
      } else {
        $(".m-tabbedItems .tabItem .inner").slick("unslick");
        mobileCarousel();
      }
    });

    $(".m-tabbedItems .tabNav button").on("click", function () {
      $(".m-tabbedItems .tabNav button.active").removeClass("active");
      $(this).addClass("active");

      var tab = "." + $(this).attr("id");
      $(".m-tabbedItems .tabItem").hide();
      $(tab).fadeIn(800);
      $(tab).children(".slick-slider").slick("refresh");
    });
  }
})(window.jQuery);
