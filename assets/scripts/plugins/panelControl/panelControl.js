// Example basic usage for a component
// (function () {
//   var components = document.querySelectorAll(".component");

//   components.forEach(function (component) {
//     const getPanel = component.querySelectorAll(".yourpanel")[0];
//     const getPanelButtons = component.querySelectorAll(".yourbuttons");

//     new panelControl({
//       panel: getPanel,
//       panelButtons: getPanelButtons
//     });
//   });
// })();

function panelControl(options) {
  let defaultOptions = {
    panel: null, //Select panel
    panelButtons: [], //Select buttons to control panel
    closeButton: null, //Select close button to close open panel
    focusOut: true, //Close panel when keyboard user focusses out of last item
    bodyOverlay: false, //Add dark overlay class to body
    bodyClose: false, //Close panel by clicking on body
    preventScrolling: false, //Prevent body scrolling when panel is open
    closePreviousContainer: null //Close previous active panel. To enable pass a container that wraps panels
  };
  options = { ...defaultOptions, ...options };

  this.init = function () {
    const panelButtons = options.panelButtons;
    const panel = options.panel;
    const closeButton = options.closeButton;
    const closePreviousContainer = options.closePreviousContainer;

    //Set up panel button attributes
    const panelID = "pc-" + Math.floor(Math.random() * 1000000000);
    var labelledBy = "";

    panelButtons.forEach(function (panelButton) {
      const buttonID = "pc-" + Math.floor(Math.random() * 1000000000);
      labelledBy = buttonID + " " + labelledBy;
      panelButton.setAttribute("id", buttonID);
      panelButton.setAttribute("aria-controls", panelID);
      panelButton.setAttribute("aria-expanded", "false");

      //Panel button main click event
      panelButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = panelButton.getAttribute("aria-expanded");

        if (isExpanded == "false") {
          //closePreviousContainer option
          if (closePreviousContainer != null) {
            closePreviousContainerOption();
          }

          openPanel();
          setFocusEvents(panelButton);
        } else {
          closePanel(panelButton);
        }
      });

      //Close button click event
      if (closeButton != null) {
        closeButton.addEventListener("click", function (e) {
          closePanel(panelButton);
        });
      }
    });

    //Set up panel attributes
    panel.setAttribute("id", panelID);
    panel.classList.add("pc-panel");
    panel.setAttribute("aria-labelledby", labelledBy);

    panel.addEventListener("click", function (element) {
      element.stopPropagation();
    });

    //Functions
    function openPanel() {
      panel.classList.add("pc-isActive");

      panelButtons.forEach(function (button) {
        button.setAttribute("aria-expanded", "true");
        button.classList.add("pc-isActive");
      });

      // play iframe video
      const iframeVideo = panel.querySelectorAll("iframe")[0];
      if (iframeVideo) {
        const iframeSrc = iframeVideo.getAttribute("data-src");
        iframeVideo.setAttribute("src", iframeSrc);
      }

      //bodyOverlay option
      if (options.bodyOverlay === true) {
        document.body.classList.add("pc-bodyOverlay");
      }

      //preventScrolling option
      if (options.preventScrolling === true) {
        document.documentElement.classList.add("pc-preventScrolling");
        document.body.classList.add("pc-preventScrolling");
      }

      //bodyClose option
      if (options.bodyClose === true) {
        setTimeout(() => {
          document.body.addEventListener("click", bodyCloseOption);
        }, 0);
      }
    }

    function closePanel(panelButton) {
      panel.classList.remove("pc-isActive");

      panelButtons.forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
        button.classList.remove("pc-isActive");
      });

      window.setTimeout(function () {
        panelButton.focus();
      }, 100);

      closePanelOptions();
    }

    function closePanelOptions() {
      //prevent iframes from playing when panel is closed
      const iframeVideo = panel.querySelectorAll("iframe")[0];
      if (iframeVideo) {
        iframeVideo.setAttribute("src", "");
      }

      //bodyOverlay option
      if (options.bodyOverlay === true) {
        document.body.classList.remove("pc-bodyOverlay");
      }

      //preventScrolling option
      if (options.preventScrolling === true) {
        document.documentElement.classList.remove("pc-preventScrolling");
        document.body.classList.remove("pc-preventScrolling");
      }

      //bodyClose option
      if (options.bodyClose === true) {
        setTimeout(() => {
          document.body.removeEventListener("click", bodyCloseOption);
        }, 0);
      }
    }

    //closePreviousContainer option
    function closePreviousContainerOption() {
      const panelContainer = closePreviousContainer;
      const activePanel = panelContainer.querySelectorAll(
        ".pc-panel.pc-isActive"
      )[0];

      if (activePanel) {
        const activePanelIds = activePanel
          .getAttribute("aria-labelledby")
          .split(" ");

        activePanelIds.forEach(function (activePanelId) {
          const activePanelButton = document.getElementById(activePanelId);

          if (activePanelButton != null) {
            activePanelButton.setAttribute("aria-expanded", "false");
            activePanelButton.classList.remove("pc-isActive");
            activePanel.classList.remove("pc-isActive");
            closePanelOptions();
          }
        });
      }
    }

    function setFocusEvents(panelButton) {
      const focusable = panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      //Focus first focusable element within panel
      if (firstFocusable) {
        window.setTimeout(function () {
          firstFocusable.focus();
        }, 100);
      }

      //Close panel when keyboard user focusses out of last item
      if (lastFocusable && options.focusOut === true) {
        lastFocusable.addEventListener("keydown", function (e) {
          const keyCode = e.keyCode || e.which;

          if (keyCode == 9) {
            closePanel(panelButton);
          }
        });
      }

      //Close open panel with ESC key
      document.addEventListener("keydown", function (e) {
        const keyCode = e.keyCode || e.which;

        if (keyCode == 27) {
          closePanel(panelButton);
        }
      });
    }

    //bodyClose option
    function bodyCloseOption() {
      const activePanel = document.querySelectorAll(".pc-panel.pc-isActive")[0];

      if (activePanel) {
        const activePanelIds = activePanel
          .getAttribute("aria-labelledby")
          .split(" ");

        activePanelIds.forEach(function (activePanelId) {
          const activePanelButton = document.getElementById(activePanelId);

          if (activePanelButton != null) {
            activePanelButton.setAttribute("aria-expanded", "false");
            activePanelButton.classList.remove("pc-isActive");
            activePanel.classList.remove("pc-isActive");
            closePanelOptions();
          }
        });
      }

      document.body.removeEventListener("click", bodyCloseOption);
    }
  };

  this.init();
}
