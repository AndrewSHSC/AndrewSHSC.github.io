(function($, window, document) {
  $(function() {
    filtertoggleDesktop();

    enquire.register('screen and (max-width:650px)', {
      match: function() {
        filtertoggleMobile();
      },
      unmatch: function() {
        filtertoggleDesktop();
      }
    });
  });


  function filtertoggleDesktop() {
    $('.m-searchresultstop .mob-filter').unbind();
    $('.m-searchresultstop .e-filters li a').unbind();
  }

  function filtertoggleMobile() {
    $('.m-searchresultstop .mob-filter').on('click', function() {
      $(this).toggleClass('active');
      $(this).siblings('ul').stop().slideToggle();
    });

    $('.m-searchresultstop .e-filters li a').on('click', function(e) {
      e.preventDefault();

      $('.m-searchresultstop .e-filters li, .m-searchresultstop .mob-filter').removeClass('active');
      $(this).parent().addClass('active');

      $('.m-searchresultstop .e-filters ul').slideUp();
    });
  }

}(window.jQuery, window, document));
