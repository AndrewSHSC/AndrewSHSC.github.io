(function($, window, document) {
  $(function() {
    accordion();
    viewtoggle();
  });

  function accordion() {
    $('.m-locationaccordion .e-item').on('click', '.e-inner', function() {
      $(this)
        .closest('.e-item')
        .toggleClass('active');
      $(this)
        .parent()
        .siblings('.e-more')
        .stop()
        .slideToggle();
    });
  }

  function viewtoggle() {
    $('#map').hide();

    $('.m-locationaccordion .e-viewoptions .grid').on('click', function() {
      $('.m-locationaccordion .e-viewoptions .map').removeClass('active');
      $(this).addClass('active');

      $('#map').hide();
      $('#grid').fadeIn();
    });

    $('.m-locationaccordion .e-viewoptions .map').on('click', function() {
      $('.m-locationaccordion .e-viewoptions .grid').removeClass('active');
      $(this).addClass('active');

      $('#grid').hide();
      $('#map').fadeIn();
    });
  }
})(window.jQuery, window, document);
