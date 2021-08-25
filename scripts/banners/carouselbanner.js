(function($, window, document) {
  $(function() {
    carouselbanner();
  });

  function carouselbanner() {
    $('.m-carouselbanner .slide-container').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true
    });
  }
})(window.jQuery, window, document);
