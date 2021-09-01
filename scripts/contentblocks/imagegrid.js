(function($, window, document) {
  $(function() {
    imagegridDesktop();

    enquire.register('screen and (max-width:767px)', {
      match: function() {
        imagegridMobile();
      },
      unmatch: function() {
        imagegridDesktop();
      }
    });
  });

  function imagegridMobile() {
    $('.m-imagegrid .e-grid').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
    });

    var slideNo = $('.m-imagegrid .e-grid .e-item').length;
    var clonedNo = $('.m-imagegrid .e-grid .slick-cloned').length;
    slideNo = slideNo - clonedNo;

    var formattedSlideNo = ("0" + (slideNo)).slice(-2);
    $('.m-imagegrid .e-carousel-controls .e-counter .total').html("/ " + formattedSlideNo);

    var calcProgressbar = (100 / (slideNo) + '%');
    $('.m-imagegrid .e-carousel-controls .e-progressbar span').css('width', calcProgressbar);

    $('.m-imagegrid .e-carousel-controls .e-arrows .e-right').on('click', function() {
      $('.m-imagegrid .e-grid').slick('slickNext');
    });

    $('.m-imagegrid .e-carousel-controls .e-arrows .e-left').on('click', function() {
      $('.m-imagegrid .e-grid').slick('slickPrev');
    });

    $('.m-imagegrid .e-grid').on('swipe', function(){
      currentslide = $('.m-imagegrid .slick-active').index();

      var formattedCurrentSlide = ("0" + (currentslide)).slice(-2) + " ";
      $('.m-imagegrid .e-carousel-controls .e-counter .current').html(formattedCurrentSlide);

      var moveProgressbar = (((currentslide) / slideNo) * 100) + '%';
      $('.m-imagegrid .e-carousel-controls .e-progressbar span').css('width' , moveProgressbar);
    });

    $('.m-imagegrid .e-carousel-controls .e-arrows .e-right, .m-imagegrid .e-carousel-controls .e-arrows .e-left').on('click', function() {
      currentslide = $('.m-imagegrid .slick-active').index();

      var formattedCurrentSlide = ("0" + (currentslide)).slice(-2) + " ";
      $('.m-imagegrid .e-carousel-controls .e-counter .current').html(formattedCurrentSlide);

      var moveProgressbar = (((currentslide) / slideNo) * 100) + '%';
      $('.m-imagegrid .e-carousel-controls .e-progressbar span').css('width' , moveProgressbar);
    });
  }


  function imagegridDesktop() {
    $('.m-imagegrid .e-grid.slick-initialized').slick('unslick');
  }

}(window.jQuery, window, document));
