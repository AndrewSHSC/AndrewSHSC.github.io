(function () {
  var components = document.querySelectorAll(".accordion .item");

  components.forEach(function (component) {
    const getPanel = component.querySelectorAll(".content")[0];
    const getPanelButtons = component.querySelectorAll(".accordionButton");

    if (typeof getPanel !== "undefined") {
      new panelControl({
        panel: getPanel,
        panelButtons: getPanelButtons
      });
    }
  });
})();
