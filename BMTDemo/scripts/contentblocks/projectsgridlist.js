(function($, window, document) {
  $(function() {
    gridlist();
  });

  function gridlist() {
    $('.m-projectsgridlist .e-controls .list').on('click', function() {
      $('.m-projectsgridlist').addClass('overlay');
      setTimeout(function(){ $('.m-projectsgridlist').removeClass('grid-view'); }, 300);
      setTimeout(function(){ $('.m-projectsgridlist').removeClass('overlay'); }, 300);
    });

    $('.m-projectsgridlist .e-controls .grid').on('click', function() {
      $('.m-projectsgridlist').addClass('overlay');
      setTimeout(function(){ $('.m-projectsgridlist').addClass('grid-view'); }, 300);
      setTimeout(function(){ $('.m-projectsgridlist').removeClass('overlay'); }, 300);
    });
  }
}(window.jQuery, window, document));
