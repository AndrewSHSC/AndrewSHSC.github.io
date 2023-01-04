(function () {
  var components = document.querySelectorAll(".mainNavList li");
  const imitationMega = document.querySelectorAll(".imitationMega")[0];

  components.forEach(function (component) {
    const getPanel = component.querySelectorAll(".megamenu")[0];
    const getPanelButtons = component.querySelectorAll(".megaButton");

    if (typeof getPanel !== "undefined") {
      new panelControl({
        panel: getPanel,
        panelButtons: getPanelButtons,
        closePreviousContainer: document.querySelectorAll(".mainNavList")[0],
        bodyClose: true,
        shareActiveState: imitationMega
      });
    }
  });

  const megaButtons = document.querySelectorAll(".megaButton");
  const megamenus = document.querySelectorAll(".megamenu");

  megaButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      var megamenu = button.nextElementSibling;
      var megaPos = megamenu.getBoundingClientRect();
      imitationMega.style.height = megamenu.offsetHeight + "px";
      imitationMega.style.width = megamenu.offsetWidth + "px";
      imitationMega.style.top = megaPos.top + "px";
      imitationMega.style.left = megaPos.left + "px";
    });
  });

  function closeMega() {
    if (imitationMega.classList.contains("pc-isActive")) {
      imitationMega.classList.remove("pc-isActive");
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

  window.addEventListener("resize", function () {
    closeMega();
  });

  window.addEventListener("scroll", function () {
    closeMega();
  });
})();
