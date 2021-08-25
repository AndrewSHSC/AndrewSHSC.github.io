(function($, window, document) {
  $(function() {
    stickysubnav();
  });

  function stickysubnav() {
    $('header').addClass('no-fix');

    //scroll functionality
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: ".m-stickysubnav", triggerHook: 0})
    .addTo(controller);

    scene.setPin(".m-stickysubnav", {pushFollowers: false});
    scene.on("start", function (event) {
        $('.m-stickysubnav').toggleClass('sticky');
        $('.m-breadcrumb').toggleClass('sticky');
    });

    $('#js-subnav').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      $(this).stop().toggleClass('active');
      $('.m-stickysubnav nav').stop().slideToggle();
    });


    //close if connect panel opened
    $('#js-connect-panel').on('click', function() {
      $('#js-subnav').removeClass('active');
      $('.m-stickysubnav nav').stop().slideUp();
    });

    // close if clicked outside window
    $(window).on('click', function(e) {
      e.stopPropagation();
      $('#js-subnav').removeClass('active');
      $('.m-stickysubnav nav').stop().slideUp();
    });

    $('.m-stickysubnav nav').on('click', function(e) {
      e.stopPropagation();
    });
  }
}(window.jQuery, window, document));
