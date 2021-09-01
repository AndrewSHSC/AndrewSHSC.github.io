(function($, window, document) {
  $(function() {
    teamgrid();
  });


  function teamgrid() {
    $('.m-teamgrid .e-item').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();

      $('html, body').addClass('fixed-stay');
      $('body').addClass('show-overlay');
      $(this).children('.e-modalinfo').fadeIn();
      $('.m-teamgrid .modal-cover').fadeIn();
    });

    $('.m-teamgrid .close').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();

      $('html, body').removeClass('fixed-stay');
      $('body').removeClass('show-overlay');

      $(this).parent().fadeOut();
      $('.m-teamgrid .modal-cover').fadeOut();
    });

    $('html, body').on('click', function(e) {
      $('html, body').removeClass('fixed-stay');
      $('body').removeClass('show-overlay');
      $('.m-teamgrid .e-modalinfo').fadeOut();
      $('.m-teamgrid .modal-cover').fadeOut();
    });
  }

}(window.jQuery, window, document));
