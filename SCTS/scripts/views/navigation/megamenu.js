(function () {
  var components = document.querySelectorAll(".mainNavigation .mainLink");
  var mainMenu = document.querySelectorAll(".mainNavigation .mainmenu")[0];

  components.forEach(function (component) {
    const getPanel = component.querySelectorAll(".megamenu")[0];
    const getPanelButtons = component.querySelectorAll("button.hasChildren")[0];

    if (typeof getPanel !== "undefined") {
      new panelControl({
        panel: getPanel,
        panelButtons: getPanelButtons,
        bodyClose: true,
        closePreviousContainer: mainMenu
      });
    }
  });
})();
