(function($, window, document) {
  $(function() {
    stickyconnect();
  });

  function stickyconnect() {
    $('header').addClass('no-fix');

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: ".m-stickyconnect", triggerHook: 0})
    .addTo(controller);

    scene.setPin(".m-stickyconnect", {pushFollowers: false});
    scene.on("start", function (event) {
        $('.m-stickyconnect').toggleClass('sticky');
    });

    var $root = $('html, body');

    $('.m-stickyconnect li a[href^="#"]').click(function (e) {
        e.preventDefault();

        $('.m-stickyconnect li').removeClass('active');
        $(this).parent().addClass('active');


        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 600);

        window.location.hash = $(this).attr('href');
        return false;
    });
  }
}(window.jQuery, window, document));
