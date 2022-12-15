(function () {
  const getPanel = document.querySelectorAll(".mobileNavigation")[0];
  const getPanelButtons = document.querySelectorAll(".mobnavButton");
  const mobnavButton = document.querySelectorAll(".mobnavButton")[0];
  const mainHeader = document.querySelectorAll(".mainHeader")[0];

  if (typeof getPanel !== "undefined") {
    new panelControl({
      panel: getPanel,
      panelButtons: getPanelButtons
    });
  }

  mobnavButton.addEventListener("click", function (e) {
    if (mobnavButton.classList.contains("pc-isActive")) {
      mainHeader.classList.add("mobnav-isActive");
    } else {
      mainHeader.classList.remove("mobnav-isActive");
    }
  });
})();
