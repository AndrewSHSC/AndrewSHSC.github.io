(function($, window, document) {
  $(function() {
    carousel5050Desktop();

    enquire.register('screen and (max-width:767px)', {
      match: function() {
        carousel5050Mobile();
      },
      unmatch: function() {
        carousel5050Desktop();
      }
    });
  });

  function carousel5050Mobile() {
    $('.m-5050carousel .e-slide-container.slick-initialized').slick('unslick');
  }

  function carousel5050Desktop() {
    $('.m-5050carousel .e-slide-container').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
      responsive: [
       {
         breakpoint: 1200,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: false,
         }
       },
     ]
    });


    var slideNo = $('.m-5050carousel .e-slide-container .e-slide').length;
    var clonedNo = $('.m-5050carousel .e-slide-container .slick-cloned').length;
    slideNo = slideNo - clonedNo;

    var formattedSlideNo = ("0" + (slideNo)).slice(-2);
    $('.m-5050carousel .e-carousel-controls .e-counter .total').html("/ " + formattedSlideNo);

    var calcProgressbar = (100 / (slideNo) + '%');
    $('.m-5050carousel .e-carousel-controls .e-progressbar span').css('width', calcProgressbar);

    $('.m-5050carousel .e-carousel-controls .e-arrows .e-right, .m-5050carousel .e-mobile-arrows .e-right').on('click', function() {
      $('.m-5050carousel .e-slide-container').slick('slickNext');
    });

    $('.m-5050carousel .e-carousel-controls .e-arrows .e-left, .m-5050carousel .e-mobile-arrows .e-left').on('click', function() {
      $('.m-5050carousel .e-slide-container').slick('slickPrev');
    });

    $('.m-5050carousel .e-carousel-controls .e-arrows .e-right, .m-5050carousel .e-carousel-controls .e-arrows .e-left').on('click', function() {
      currentslide = $('.m-5050carousel .slick-active').index();

      var formattedCurrentSlide = ("0" + (currentslide)).slice(-2) + " ";
      $('.m-5050carousel .e-carousel-controls .e-counter .current').html(formattedCurrentSlide);

      var moveProgressbar = (((currentslide) / slideNo) * 100) + '%';
      $('.m-5050carousel .e-carousel-controls .e-progressbar span').css('width' , moveProgressbar);
    });
  }

}(window.jQuery, window, document));
