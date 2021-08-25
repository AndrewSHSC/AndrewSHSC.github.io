(function($, window, document) {
  $(function() {
    newsevents();
  });


  function newsevents() {
    $('.m-newsandevents .mobile-nav').on('click', function(e) {
      e.preventDefault();

      $(this).toggleClass('active');
      $('.m-newsandevents .e-tabs').slideToggle();
    });

    // tabs
    $('.m-newsandevents .e-tabs a').on('click', function(e) {
      e.preventDefault();

      $('.m-newsandevents .e-tabs a').removeClass('active');
      $(this).addClass('active');
      var tab = $(this).attr('href');
      $('.m-newsandevents .e-grid').hide();

      if($(window).width() < 1230) {
        $(tab).fadeIn().css('display', 'block');
      } else {
        $(tab).fadeIn().css('display', 'flex');
      }

      if($(window).width() < 767) {
        $('.m-newsandevents .e-tabs').stop().slideUp();
        $('.m-newsandevents .mobile-nav').removeClass('active');
      }
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.role-type-navigation a[href$="'+hash+'"]').trigger('click');
  }

}(window.jQuery, window, document));
