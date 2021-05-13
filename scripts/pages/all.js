//JAVASCRIPT APPLIED TO ALL PAGES
//THIS SHOULD CONTAIN ANY ELEMENTS/COMPONENTS USED ACROSS MULTIPLE PAGES

// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  $(function() {
    scrollevents();
  });

  function scrollevents() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".m-videoblock", triggerHook: 0, duration:1200})
			.setTween(".m-videoblock video", {top: "100vh", ease: Linear.easeNone})
			.addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".m-revealimage", triggerHook: "onEnter", duration: "200%"})
			.setTween(".m-revealimage picture", {top: "50vh", ease: Linear.easeNone})
			.addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".m-revealimage", triggerHook: 0})
      .on("start", function () {
        $('.m-backgroundimg').toggleClass('active');
      })
			.addTo(controller);
  }

}(window.jQuery, window, document));
