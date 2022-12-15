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
  var imitationMega = document.querySelectorAll(".imitationMega")[0];
  var mainHeader = document.querySelectorAll(".mainHeader")[0];

  megaButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      imitationMega.classList.add("isActive");
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
})();
