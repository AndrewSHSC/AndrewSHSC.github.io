(function () {
  var components = document.querySelectorAll(".mainNavList li");

  components.forEach(function (component) {
    const getPanel = component.querySelectorAll(".megamenu")[0];
    const getPanelButtons = component.querySelectorAll(".megaButton");

    if (typeof getPanel !== "undefined") {
      new panelControl({
        panel: getPanel,
        panelButtons: getPanelButtons,
        closePreviousContainer: document.querySelectorAll(".mainNavList")[0],
        bodyClose: true
      });
    }
  });

  var megaButtons = document.querySelectorAll(".megaButton");
  var megamenus = document.querySelectorAll(".megamenu");
  var imitationMega = document.querySelectorAll(".imitationMega")[0];

  megaButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("pc-isActive")) {
        imitationMega.classList.add("isActive");
      } else {
        imitationMega.classList.remove("isActive");
      }

      var megamenu = button.nextElementSibling;
      var megaPos = megamenu.getBoundingClientRect();
      imitationMega.style.height = megamenu.offsetHeight;
      imitationMega.style.width = megamenu.offsetWidth;
      imitationMega.style.top = megaPos.top;
      imitationMega.style.left = megaPos.left;
    });

    document.body.addEventListener("click", function () {
      imitationMega.classList.remove("isActive");
    });
  });

  window.addEventListener("resize", function () {
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
  });
})();
