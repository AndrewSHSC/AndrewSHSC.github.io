(function () {
  var mainHeader = document.querySelectorAll(".mainHeader")[0];
  var imitationMega = document.querySelectorAll(".imitationMega")[0];
  var megaButtons = mainHeader.querySelectorAll(".megaButton");
  var megamenus = mainHeader.querySelectorAll(".megamenu");

  var lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset;
      if (window.pageYOffset > 0) {
        if (st > lastScrollTop) {
          if (window.scrollY) {
            mainHeader.classList.remove("scrollUp");
            mainHeader.classList.add("scrollDown");

            //close mega
            if (imitationMega.classList.contains("isActive")) {
              imitationMega.classList.remove("isActive");
              megaButtons.forEach(function (button) {
                if (button.classList.contains("pc-isActive")) {
                  button.classList.remove("pc-isActive");
                  button.setAttribute("aria-expanded", "false");
                }
              });
              megamenus.forEach(function (mega) {
                if (mega.classList.contains("pc-isActive")) {
                  mega.classList.remove("pc-isActive");
                }
              });
            }
          }
        } else {
          if (window.scrollY) {
            mainHeader.classList.remove("scrollDown");
            mainHeader.classList.add("scrollUp");
          } else {
            mainHeader.classList.remove("scrollUp");
            mainHeader.classList.remove("scrollDown");
          }
        }
      } else {
        mainHeader.classList.remove("scrollUp");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
})();
