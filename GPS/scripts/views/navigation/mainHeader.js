(function () {
  var mainHeader = document.querySelectorAll(".mainHeader")[0];
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
