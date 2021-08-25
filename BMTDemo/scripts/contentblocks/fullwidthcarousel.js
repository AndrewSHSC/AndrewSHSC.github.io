(function($, window, document) {
  $(function() {
    fullwidthcarousel();
  });


  function fullwidthcarousel() {
    $('.m-fullwidthcarousel .e-slide-container').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
    });

    // IE/EDGE width calc fix
    $(".m-fullwidthcarousel .e-slide-container").slick("refresh");

    var slideNo = $('.m-fullwidthcarousel .e-slide-container .e-slide').length;
    var clonedNo = $('.m-fullwidthcarousel .e-slide-container .slick-cloned').length;
    slideNo = slideNo - clonedNo;

    var formattedSlideNo = ("0" + (slideNo)).slice(-2);
    $('.m-fullwidthcarousel .e-carousel-controls .e-counter .total').html("/ " + formattedSlideNo);

    var calcProgressbar = (100 / (slideNo) + '%');
    $('.m-fullwidthcarousel .e-carousel-controls .e-progressbar span').css('width', calcProgressbar);

    $('.m-fullwidthcarousel .e-carousel-controls .e-arrows .e-right').on('click', function() {
      $('.m-fullwidthcarousel .e-slide-container').slick('slickNext');
    });

    $('.m-fullwidthcarousel .e-carousel-controls .e-arrows .e-left').on('click', function() {
      $('.m-fullwidthcarousel .e-slide-container').slick('slickPrev');
    });

    $('.m-fullwidthcarousel .e-slide-container').on('swipe', function() {
      currentslide = $('.m-fullwidthcarousel .slick-active').index();

      var formattedCurrentSlide = ("0" + (currentslide)).slice(-2) + " ";
      $('.m-fullwidthcarousel .e-carousel-controls .e-counter .current').html(formattedCurrentSlide);

      var moveProgressbar = (((currentslide) / slideNo) * 100) + '%';
      $('.m-fullwidthcarousel .e-carousel-controls .e-progressbar span').css('width' , moveProgressbar);
    });

    $('.m-fullwidthcarousel .e-carousel-controls .e-arrows .e-right, .m-fullwidthcarousel .e-carousel-controls .e-arrows .e-left').on('click', function() {
      currentslide = $('.m-fullwidthcarousel .slick-active').index();

      var formattedCurrentSlide = ("0" + (currentslide)).slice(-2) + " ";
      $('.m-fullwidthcarousel .e-carousel-controls .e-counter .current').html(formattedCurrentSlide);

      var moveProgressbar = (((currentslide) / slideNo) * 100) + '%';
      $('.m-fullwidthcarousel .e-carousel-controls .e-progressbar span').css('width' , moveProgressbar);
    });
  }

}(window.jQuery, window, document));
