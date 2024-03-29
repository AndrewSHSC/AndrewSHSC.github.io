(function () {
  const getPanel = document.querySelectorAll(".n-mobile-nav")[0];
  const getPanelButtons = document.querySelectorAll(".mobileMenuButton");

  if (typeof getPanel !== "undefined") {
    new panelControl({
      panel: getPanel,
      panelButtons: getPanelButtons,
      preventScrolling: true
    });
  }

  let components = document.querySelectorAll(".n-mobile-nav .mainLinks li");

  components.forEach(function (component) {
    const getSubnavPanel = component.querySelectorAll(".subnav")[0];
    const getSubnavPanelButtons = component.querySelectorAll(".next")[0];
    const getCloseButton = component.querySelectorAll(".back")[0];

    if (typeof getSubnavPanel !== "undefined") {
      new panelControl({
        panel: getSubnavPanel,
        panelButtons: getSubnavPanelButtons,
        closeButton: getCloseButton
      });
    }
  });
})();
