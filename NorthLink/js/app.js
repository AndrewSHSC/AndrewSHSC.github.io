"use strict";

/**
 * Magnific popup
 */
(function () {
  $(".js-play-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    enableEscapeKey: true
  });
})();

/**
 * Toggle return route
 */
(function () {
  const $returnrouteToggle = $(".js-returnroute-toggle");
  const $returnrouteTitle = $(".timetable__subtitle");
  const $returnroutePanel = $(".js-returnroute-panel");
  const $showreturnCheckbox = $(".js-showreturn-checkbox");
  $returnrouteToggle.on("click", function (e) {
    const $this = $(e.target);
    if ($this.hasClass("is-active")) {
      $this.text("Show return route").removeClass("is-active");
      $returnrouteTitle.removeClass("is-active");
      $returnroutePanel.slideUp("fast");
      $showreturnCheckbox.prop("checked", "");
    } else {
      $this.text("Hide return route").addClass("is-active");
      $returnrouteTitle.addClass("is-active");
      $returnroutePanel.slideDown("fast");
      $showreturnCheckbox.prop("checked", "checked");
    }
  });
  $showreturnCheckbox.on("click", function () {
    $returnrouteToggle.trigger("click");
  });
})();

/**
 * Accordion
 */
(function () {
  $(".accordion__head").on("click", function () {
    $(this).parent().toggleClass("is-active");
  });
})();

/**
 * Accordion
 */
(function () {
  $(".servicepanels__head").on("click", function () {
    $(this).parent().toggleClass("is-active");
    $(this).parent().find(".servicepanels__body").slideToggle();
    // if ($(this).parent().hasClass('is-active')) {
    //     $(this).parent().removeClass('is-active');
    //     $(this).parent().find('.servicepanels__body').slideUp();
    // } else {
    //     $(this).parent().addClass('is-active');
    //     $(this).parent().find('.servicepanels__body').slideDown();
    // }
  });
})();

/**
 * Animate On Scroll Library
 */
(function () {
  AOS.init({
    once: true,
    disable: "mobile"
  });
})();

/**
 * Toggle Footer menu on Mobile
 */
(function () {
  $(".footer__menu-toggle").on("click", function () {
    if (!$(this).hasClass("is-active")) {
      $(this).toggleClass("is-active");
      $(this).closest(".footer__menu-col").find(".footer__menu-list").slideDown("fast");
    } else {
      $(this).removeClass("is-active");
      $(this).closest(".footer__menu-col").find(".footer__menu-list").slideUp("fast");
    }
  });
})();

/**
 * Toggle Mobilenav menu on Mobile
 */
(function () {
  $(".mobilenav__menu-toggle").on("click", function () {
    if (!$(this).hasClass("is-active")) {
      $(this).toggleClass("is-active");
      $(this).closest(".mobilenav__menu-section").find(".mobilenav__menu-list").slideDown("fast");
    } else {
      $(this).removeClass("is-active");
      $(this).closest(".mobilenav__menu-section").find(".mobilenav__menu-list").slideUp("fast");
    }
  });
})();

/**
 * Datepicker
 */
(function () {
  $("#datepicker-dates-1, #datepicker-dates-2, #datepicker-dates-3").datetimepicker({
    format: "MM-DD-YYYY"
  });
})();

/**
 * Datepicker Weekly
 */
(function () {
  $("#weeklyDatePicker").datetimepicker({
    format: "MM-DD-YYYY"
  });

  //Get the value of Start and End of Week
  $("#weeklyDatePicker").on("dp.change", function (e) {
    var value = $("#weeklyDatePicker").val();
    var firstDate = moment(value, "MM-DD-YYYY").day(0).format("MM-DD-YYYY");
    var lastDate = moment(value, "MM-DD-YYYY").day(6).format("MM-DD-YYYY");
    $("#weeklyDatePicker").val(firstDate + " - " + lastDate);
  });
  $("#weeklyDatePickerReturnRoute").datetimepicker({
    format: "MM-DD-YYYY"
  });

  //Get the value of Start and End of Week
  $("#weeklyDatePickerReturnRoute").on("dp.change", function (e) {
    var value = $("#weeklyDatePickerReturnRoute").val();
    var firstDate = moment(value, "MM-DD-YYYY").day(0).format("MM-DD-YYYY");
    var lastDate = moment(value, "MM-DD-YYYY").day(6).format("MM-DD-YYYY");
    $("#weeklyDatePickerReturnRoute").val(firstDate + " - " + lastDate);
  });
})();

/**
 * Custom select
 */
(function () {
  $(".select").niceSelect();
})();

/**
 * Toggle Mobile Menu
 */
(function () {
  const $toggleMenuButton = $(".js-togglemenu");
  $toggleMenuButton.on("click", function () {
    $(this).toggleClass("is-active");
    $("body").toggleClass("is-scroll-lock has-mobilenav-open");
  });

  // Close Mobile Menu panel with ESC key
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      if ($toggleMenuButton.hasClass("is-active")) {
        $toggleMenuButton.trigger("click");
      }
    }
  });

  // Close Mobile Menu when keyboard user focusses out of last item
  const mobileNav = document.querySelector(".mobilenav");
  const focusable = mobileNav.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const lastFocusable = focusable[focusable.length - 1];
  const focusOut = true;
  if (lastFocusable && focusOut === true) {
    lastFocusable.addEventListener("keydown", function (e) {
      const keyCode = e.keyCode || e.which;
      if (keyCode == 9) {
        $toggleMenuButton.trigger("click");
      }
    });
  }
})();

/**
 * Sticky Header
 */
(function () {
  const mainHeader = document.querySelectorAll(".js-header")[0];
  let mainHeaderHeight = mainHeader.offsetHeight;
  let threshold = 0;
  let lastScroll = 0;
  const olderVersionActive = () => {
    if (window.innerWidth >= 1024) {
      // console.log("Desktop")

      if (window.scrollY > 0) {
        mainHeader.classList.add("is-sticky");
      }
      window.addEventListener("scroll", function () {
        const newScroll = this.scrollY;
        const diff = newScroll - lastScroll;
        if (newScroll > 0) {
          threshold = threshold + diff > mainHeaderHeight ? mainHeaderHeight : threshold + diff;
          threshold = threshold < 0 ? 0 : threshold;
          mainHeader.style.top = -threshold + "px";
          lastScroll = newScroll;
          mainHeader.classList.add("is-sticky");
        } else if (newScroll <= 100) {
          mainHeader.style.top = 0;
          mainHeader.classList.remove("is-sticky");
        }
      }, false);
    } else {
      // console.log('Mobile')
      mainHeader.classList.remove("is-sticky");
    }
  };
  window.addEventListener("resize", olderVersionActive);
  window.addEventListener("load", olderVersionActive);
})();

/**
 * Offer Cards Carousel
 */
(function () {
  const $slider = $(".offerscarousel");
  const $progressBar = $(".offerscarousel__progress");
  if (!$slider.length) return;
  $slider.on("init", function () {
    const currentDot = $(".slick-dots .slick-active").index() + 1;
    const dots = $slider.find(".slick-dots li").length;
    const calc = currentDot / dots * 100;
    $progressBar.css("background-size", calc + "% 100%");
  });
  $slider.on("afterChange", function () {
    const currentDot = $(".slick-dots .slick-active").index() + 1;
    const dots = $slider.find(".slick-dots li").length;
    const calc = currentDot / dots * 100;
    $progressBar.css("background-size", calc + "% 100%");
  });
  $slider.slick({
    variableWidth: true,
    infinite: true,
    autoplay: false,
    draggable: true,
    dots: true,
    arrows: true,
    prevArrow: $(".offerscarousel__prev"),
    nextArrow: $(".offerscarousel__next")
  });
})();