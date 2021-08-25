(function($, window, document) {
  $(function() {
    homepagebannerDesktop();

    enquire.register('screen and (max-width:1230px)', {
      match: function() {
        homepagebannerMobile();
      },
      unmatch: function() {
        homepagebannerDesktop();
      }
    });
  });

  function homepagebannerDesktop() {
    function playPauseVideo(slick, control){
      var currentSlide, video;
      currentSlide = slick.find(".slick-current");
      video = currentSlide.children('.e-background').children("video").get(0);

      if (video != null) {
        if (control === "play"){
          video.play();
        } else {
          video.pause();
        }
      }
    }

    if ($(window).width() > 1200) {
      $('.m-homepagebanner .js-slide-container').on("init", function(slick){
        slick = $(slick.currentTarget);
        setTimeout(function(){
          playPauseVideo(slick,"play");
        }, 1000);
      });

      $('.m-homepagebanner .js-slide-container').on("beforeChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"pause");
      });

      $('.m-homepagebanner .js-slide-container').on("afterChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"play");
      });
    }


    $('.m-homepagebanner .js-slide-container').not('.slick-initialized').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      pauseOnHover: false,
      pauseOnDotsHover:false,
      accessibility: false,
      asNavFor: '.m-homepagebanner .e-desktop-slider-controls .container'
    });

    $('.m-homepagebanner .e-desktop-slider-controls .container').not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      pauseOnDotsHover:false,
      pauseOnHover: false,
      accessibility: false,
      asNavFor: '.m-homepagebanner .js-slide-container'
    });
  }

  function homepagebannerMobile() {
    $('.m-homepagebanner .js-slide-container').not('.slick-initialized').slick({
      arrows: false,
      infinite: true,
      pauseOnHover: false
    });

    $('.m-homepagebanner .js-slide-container').on('afterChange', function(event, slick, currentSlide) {
      var formattedCurrentSlide = ('0' + (currentSlide + 1)).slice(-2);
      $('.m-homepagebanner .e-count .current').html(formattedCurrentSlide);
    });

    $('.m-homepagebanner .e-arrows .e-right').on('click', function() {
      $('.m-homepagebanner .js-slide-container').slick('slickNext');
    });

    $('.m-homepagebanner .e-arrows .e-left').on('click', function() {
      $('.m-homepagebanner .js-slide-container').slick('slickPrev');
    });
  }
})(window.jQuery, window, document);
