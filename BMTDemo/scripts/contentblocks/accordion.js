(function ($, window, document) {
  $(function () {
    accordion();
  });

  function accordion() {
    $(".m-accordion .e-close").on("click", function () {
      $(this).parent().stop().toggleClass("active");
      $(this).parent().siblings(".e-more").stop().slideToggle();
    });
  }
})(window.jQuery, window, document);
