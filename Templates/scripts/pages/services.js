(function($, window, document) {
  $(function() {
    servicelistDesktop();

    enquire.register('screen and (max-width:991px)', {
      match: function() {
        servicelistMobile();
      },
      unmatch: function() {
        servicelistDesktop();
      }
    });
  });

  function servicelistMobile() {
    $(".m-serviceslist .js-accordion").unbind();
    $(".m-serviceslist .js-accordion").removeClass('mob-active', 'active');
    $(".m-serviceslist .level-2").slideUp();


    $('.m-serviceslist .js-accordion').on('click', function(e) {
      e.preventDefault();

      $(this).toggleClass('mob-active');
      $(this).siblings('.level-2').stop().slideToggle();
    });
  }

  function servicelistDesktop() {
    $(".m-serviceslist .js-accordion").unbind();
    $(".m-serviceslist .js-accordion").removeClass('active', 'mob-active');
    $('.m-serviceslist .level-2').removeClass('active');

    $('.m-serviceslist .js-accordion').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      $('.m-serviceslist .js-accordion').removeClass('active');
      $(this).toggleClass('active');
      $('.m-serviceslist .level-2').removeClass('active');
      $(this).siblings('.level-2').stop().toggleClass('active');
    });

    $('html, body').on('click', function() {
      $('.m-serviceslist .js-accordion').removeClass('active');
      $('.m-serviceslist .level-2').removeClass('active');
    });
  }
}(window.jQuery, window, document));
