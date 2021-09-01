(function($, window, document) {
  $(function() {
    azAnchor();
    mobdropdown();
    viewtoggle();
  });

  function mobdropdown() {
    $('.m-filters .filter-mob-toggle').on('click', function() {
      $(this).stop().toggleClass('active');
      $(this).siblings('.e-filtercontainer').stop().slideToggle();
    });
  }

  function azAnchor() {
    var $root = $('html, body');

      $('.m-azFilter a[href^="#"]').click(function (e) {
          e.preventDefault();
          $('.m-azFilter li').removeClass('active');
          $(this).parent().addClass('active');
          $root.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 600);

          return false;
      });
  }

  function viewtoggle() {
    $('#map').hide();

    $('.m-filters .e-viewoptions .grid').on('click', function() {
      $('.m-filters .e-viewoptions .map').removeClass('active');
      $(this).addClass('active');

      $('#map').hide();
      $('#grid').fadeIn();
    });

    $('.m-filters .e-viewoptions .map').on('click', function() {
      $('.m-filters .e-viewoptions .grid').removeClass('active');
      $(this).addClass('active');

      $('#grid').hide();
      $('#map').fadeIn();
    });
  }


}(window.jQuery, window, document));
