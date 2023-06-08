(function () {
  const getPanel = document.querySelectorAll(".inSectionNav .linksList")[0];
  const getPanelButtons = document.querySelectorAll(
    ".inSectionNav .dropdown"
  )[0];

  if (typeof getPanel !== "undefined") {
    new panelControl({
      panel: getPanel,
      panelButtons: getPanelButtons,
      bodyClose: true
    });
  }
})();
