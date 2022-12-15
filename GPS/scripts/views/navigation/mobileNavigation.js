(function () {
  const getPanel = document.querySelectorAll(".mobileNavigation")[0];
  const getPanelButtons = document.querySelectorAll(".mobnavButton");
  const mobnavButton = document.querySelectorAll(".mobnavButton")[0];
  const mainHeader = document.querySelectorAll(".mainHeader")[0];

  if (typeof getPanel !== "undefined") {
    new panelControl({
      panel: getPanel,
      panelButtons: getPanelButtons,
      preventScrolling: true
    });
  }

  mobnavButton.addEventListener("click", function (e) {
    if (mobnavButton.classList.contains("pc-isActive")) {
      mainHeader.classList.add("mobnav-isActive");
    } else {
      mainHeader.classList.remove("mobnav-isActive");
    }
  });

  // subnav
  var components = document.querySelectorAll(".mobileNavigation li");

  components.forEach(function (component) {
    const getPanel = component.querySelectorAll(".subNav")[0];
    const getPanelButtons = component.querySelectorAll(".subnavButton");
    const getCloseBtn = component.querySelectorAll(".closeBtn")[0];

    if (typeof getPanel !== "undefined") {
      new panelControl({
        panel: getPanel,
        panelButtons: getPanelButtons,
        closeButton: getCloseBtn
      });
    }
  });
})();
