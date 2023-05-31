(() => {
  const getPanel = document.querySelectorAll(".searchOverlay")[0];
  const getPanelButtons = document.querySelectorAll(".header .searchButton");
  const getCloseButton = document.querySelectorAll(
    ".searchOverlay .closeButton"
  )[0];

  if (typeof getPanel !== "undefined") {
    new panelControl({
      panel: getPanel,
      panelButtons: getPanelButtons,
      closeButton: getCloseButton,
      preventScrolling: true
    });
  }
})();
