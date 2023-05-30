// PanelControl v2.0.4

// Example basic usage for a component
// (function () {
//   var components = document.querySelectorAll(".component");

//   components.forEach(function (component) {
//     const getPanel = component.querySelectorAll(".yourpanel")[0];
//     const getPanelButtons = component.querySelectorAll(".yourbuttons");
//     if (typeof getPanel !== "undefined") {
//      new panelControl({
//         panel: getPanel,
//        panelButtons: getPanelButtons
//      });
//     }
//   });
// })();

function panelControl(options) {
  let defaultOptions = {
    panel: null, //Select panel
    panelButtons: null, //Select buttons to control panel
    closeButton: null, //Select close button to close open panel
    focusOut: true, //Close panel when keyboard user focusses out of last item
    bodyOverlay: false, //Add dark overlay class to body
    bodyClose: false, //Close panel by clicking on body
    preventScrolling: false, //Prevent body scrolling when panel is open
    closePreviousContainer: null, //Close previous active panel. To enable pass a container that wraps panels
    closePreviousPanelClass: null, //Use alongside closePreviousContainer if you have a panel within a panel. Pass classname of panel as string
    shareActiveState: null, //Share panel active state with another element
    preventResetClick: false, //Prevent ability to close active panel on click of active button,
    defaultOpen: false //Open panel by default
  };
  options = { ...defaultOptions, ...options };

  this.init = function () {
    const panelButtons = options.panelButtons;
    const panel = options.panel;
    const shareActiveState = options.shareActiveState;
    const closeButton = options.closeButton;
    const closePreviousContainer = options.closePreviousContainer;
    const preventResetClick = options.preventResetClick;
    const defaultOpen = options.defaultOpen;
    const closePreviousPanelClass = options.closePreviousPanelClass;

    //Set up panel button attributes
    const panelID = "pc-" + Math.floor(Math.random() * 1000000000);
    var labelledBy = "";

    function panelButtonsFunction(panelButton) {
      const buttonID = "pc-" + Math.floor(Math.random() * 1000000000);
      labelledBy = buttonID + " " + labelledBy;
      panelButton.setAttribute("id", buttonID);
      panelButton.setAttribute("aria-controls", panelID);

      if (defaultOpen == false) {
        panelButton.setAttribute("aria-expanded", "false");
      } else {
        panelButton.setAttribute("aria-expanded", "true");
        panelButton.classList.add("pc-isActive");
      }

      //Panel button key events
      setKeyEvents(panelButton);

      //Panel button main click event
      panelButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = panelButton.getAttribute("aria-expanded");

        if (isExpanded == "false") {
          //closePreviousContainer option
          if (closePreviousContainer != null) {
            closePreviousContainerOption(closePreviousPanelClass);
          }

          openPanel();
        } else {
          if (preventResetClick === false) {
            closePanel(panelButton);
          }
        }
      });

      //Close button click event
      if (closeButton != null) {
        closeButton.addEventListener("click", function (e) {
          closePanel(panelButton);
        });
      }
    }

    if (panelButtons instanceof NodeList) {
      panelButtons.forEach(function (panelButton) {
        panelButtonsFunction(panelButton);
      });
    } else {
      panelButtonsFunction(panelButtons);
    }

    //Set up panel attributes
    panel.setAttribute("id", panelID);
    panel.classList.add("pc-panel");
    panel.setAttribute("aria-labelledby", labelledBy);

    if (defaultOpen != false) {
      panel.classList.add("pc-isActive");
    }

    panel.addEventListener("click", function (element) {
      element.stopPropagation();
    });

    //shareActiveState option
    if (shareActiveState != null && defaultOpen != false) {
      shareActiveState.classList.add("pc-isActive");
    }

    //Functions
    function openPanel() {
      panel.classList.add("pc-isActive");
      if (panelButtons instanceof NodeList) {
        panelButtons.forEach(function (button) {
          button.setAttribute("aria-expanded", "true");
          button.classList.add("pc-isActive");
        });
      } else {
        panelButtons.setAttribute("aria-expanded", "true");
        panelButtons.classList.add("pc-isActive");
      }

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

      //shareActiveState option
      if (shareActiveState != null) {
        shareActiveState.classList.add("pc-isActive");
      }

      //bodyClose option
      if (options.bodyClose === true) {
        bodyCloseOption();
      }
    }

    function closePanel(panelButton) {
      panel.classList.remove("pc-isActive");

      if (panelButtons instanceof NodeList) {
        panelButtons.forEach(function (button) {
          button.setAttribute("aria-expanded", "false");
          button.classList.remove("pc-isActive");
        });
      } else {
        panelButtons.setAttribute("aria-expanded", "false");
        panelButtons.classList.remove("pc-isActive");
      }

      panelButton.focus();

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

      //shareActiveState option
      if (shareActiveState != null) {
        shareActiveState.classList.remove("pc-isActive");
      }
    }

    //closePreviousContainer option
    function closePreviousContainerOption(activePanel) {
      const getPanels = closePreviousContainer.querySelectorAll(activePanel);

      const processActivePanel = function (activePanel) {
        const activePanelIds = activePanel
          .getAttribute("aria-labelledby")
          .split(" ");

        activePanelIds.forEach(function (activePanelId) {
          const activePanelButton = document.getElementById(activePanelId);

          if (activePanelButton != null) {
            activePanelButton.setAttribute("aria-expanded", "false");
            activePanelButton.classList.remove("pc-isActive");
          }
        });

        activePanel.classList.remove("pc-isActive");
        closePanelOptions();
      };

      if (getPanels.length > 0) {
        getPanels.forEach(function (activePanel) {
          if (activePanel.classList.contains("pc-isActive")) {
            processActivePanel(activePanel);
          }
        });
      } else {
        const activePanel = closePreviousContainer.querySelector(
          ".pc-isActive:not([aria-expanded])"
        );

        if (activePanel != null) {
          processActivePanel(activePanel);
        }
      }
    }

    function setKeyEvents(panelButton) {
      const focusable = panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      //Focus first focusable element within panel
      panelButton.addEventListener("keydown", function (e) {
        const keyCode = e.keyCode || e.which;

        if (firstFocusable) {
          if (!e.shiftKey && keyCode == 9) {
            if (panelButton.getAttribute("aria-expanded") === "true") {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }

        //Arrow key functionality
        if (keyCode == 39) {
          if (
            panelButton.nextElementSibling &&
            panelButton.nextElementSibling.hasAttribute("aria-expanded")
          ) {
            panelButton.nextElementSibling.focus();
          }
        }

        if (keyCode == 37) {
          if (
            panelButton.previousElementSibling &&
            panelButton.previousElementSibling.hasAttribute("aria-expanded")
          ) {
            panelButton.previousElementSibling.focus();
          }
        }
      });

      // Focus panelButton when using shift tab to navigate
      if (firstFocusable) {
        firstFocusable.addEventListener("keydown", function (e) {
          const keyCode = e.keyCode || e.which;

          if (e.shiftKey && keyCode == 9) {
            e.preventDefault();
            panelButton.focus();
          }
        });
      }

      //Close panel when keyboard user focusses out of last item
      if (lastFocusable && options.focusOut === true) {
        lastFocusable.addEventListener("keydown", function (e) {
          const keyCode = e.keyCode || e.which;

          if (keyCode == 9) {
            e.preventDefault();
            closePanel(panelButton);
          }
        });
      }

      //Close open panel with ESC key
      if (options.focusOut === true) {
        panel.addEventListener("keydown", function (e) {
          const keyCode = e.keyCode || e.which;
          if (keyCode == 27) {
            e.preventDefault();
            if (options.focusOut === true) {
              closePanel(panelButton);
            }
          }
        });
      }
    }

    //bodyClose option
    function bodyCloseOption() {
      const activePanel = panel;
      document.body.addEventListener("click", bodyCloseCall);

      function bodyCloseCall() {
        if (activePanel.classList.contains("pc-isActive")) {
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

        document.body.removeEventListener("click", bodyCloseCall);
      }
    }
  };

  this.init();
}
