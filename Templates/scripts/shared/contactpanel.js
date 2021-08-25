(function($, window, document) {
  $(function() {
    connectpanel();
  });

  function resetPanel() {
    if($('.m-connect-panel .e-moreexperts .e-expert').hasClass('opened')) {
      console.log('FIRE');
      $('.m-connect-panel .e-moreexperts .e-expert').removeClass('opened');
      $('.m-connect-panel .e-moreexperts .e-expert .e-open').slideUp();
      $('.m-connect-panel .e-moreexperts .e-expert .e-closed').slideDown();

      $('.m-connect-panel .e-expert.init').addClass('opened');
      $('.m-connect-panel .e-expert.init .e-closed').slideUp();
      $('.m-connect-panel .e-expert.init .e-open').slideDown();
    }
  }

  function connectpanel() {
    $('#js-connect-panel').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.m-connect-panel').toggleClass('active');
      $('body').toggleClass('show-overlay');

      if($(window).width() < 767) {
        $('body, html').addClass('fixed');
      }
    });

    $('.m-connect-panel .close').on('click', function() {
      $('.m-connect-panel').removeClass('active');
      $('body').removeClass('show-overlay');
      $('body, html').removeClass('fixed');

      resetPanel();
    });

    // accordion like functionality
    $('.m-connect-panel .e-expert').on('click', function() {
      if (!($(this).hasClass('opened'))) {
        $('.m-connect-panel .e-expert .e-open').slideUp();
        $('.m-connect-panel .e-expert .e-closed').slideDown();
        $('.m-connect-panel .e-expert').removeClass('opened');
        $(this).addClass('opened');
        $(this).children('.e-open').slideDown();
        $(this).children('.e-closed').slideUp();
      }
    });

    // close if clicked outside window
    $(window).on('click', function(e) {
      e.stopPropagation();
      $('.m-connect-panel').removeClass('active');
      $('body').removeClass('show-overlay');
      $('body, html').removeClass('fixed');

      resetPanel();
    });

    $('.m-connect-panel').on('click', function(e) {
      e.stopPropagation();
    });
  }
}(window.jQuery, window, document));
