// IIFE - Immediately Invoked Function Expression
(function($, window, document) {
  $(function() {
    newsMobileSubMenu();
  });

  function newsMobileSubMenu() {
    var newsNav = $(".l-newsnav");

    $(".m-mobnews").remove();
    newsNav.show();

    $(".l-newsnav .more").hide();

      $(document).on('click', '.l-newsnav .e-title', function () {
          if ($(this).hasClass("open")) {
              $(this).removeClass("open");
              $(this).siblings(".more").slideToggle();
          } else {
              $(".l-newsnav .e-title").removeClass("open");
              $(".l-newsnav .more").slideUp();
              $(this).addClass("open");
              $(this).siblings(".more").slideToggle();
          }
      });

    enquire.register("screen and (max-width:767px)", {
      match: function() {
        $(
          '<div class="m-mobnews m-subnav"><h4>Filter</h4><div class="submenuBtn"><span></span><span></span><span></span></div></div>'
        ).insertBefore(".l-newsnav");
        newsNav.hide();
        $(".submenuBtn").on("click", function() {
          newsNav.stop().slideToggle();
          $(this).toggleClass("open");
        });
      },
      unmatch: function() {
        $(".m-mobnews").remove();
        newsNav.show();
      }
    });
  }
})(window.jQuery, window, document);
