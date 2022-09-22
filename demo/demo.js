(function () {
  var block = document.querySelectorAll(".testBlock")[0];
  var container = document.querySelectorAll(".testBlock .itemContainer")[0];
  var items = document.querySelectorAll(".testBlock .item");

  items.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      items.forEach((item) => {
        if (item.classList.contains("hoverMain")) {
          item.classList.remove("hoverMain");
        }

        if (item.classList.contains("hoverAfterOne")) {
          item.classList.remove("hoverAfterOne");
        }

        if (item.classList.contains("hoverAfterTwo")) {
          item.classList.remove("hoverAfterTwo");
        }

        if (item.classList.contains("hoverPreviousOne")) {
          item.classList.remove("hoverPreviousOne");
        }

        if (item.classList.contains("hoverPreviousTwo")) {
          item.classList.remove("hoverPreviousTwo");
        }
      });
    });

    item.addEventListener("mouseover", () => {
      item.classList.add("hoverMain");

      if (item.nextElementSibling) {
        item.nextElementSibling.classList.add("hoverAfterOne");
      }

      if (item.nextElementSibling.nextElementSibling) {
        item.nextElementSibling.nextElementSibling.classList.add(
          "hoverAfterTwo"
        );
      }

      if (item.previousElementSibling) {
        item.previousElementSibling.classList.add("hoverPreviousOne");
      }

      if (item.previousElementSibling.previousElementSibling) {
        item.previousElementSibling.previousElementSibling.classList.add(
          "hoverPreviousTwo"
        );
      }
    });
  });

  container.addEventListener("mouseleave", () => {
    enableScroll();
  });

  container.addEventListener("mouseenter", () => {
    disableScroll();
  });

  function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  }

  var movement = 0;
  block.addEventListener("wheel", function (event) {
    debounce(() => {
      if (event.deltaY < 0) {
        movement = movement + 100;
        container.style.transform = "translateX(" + movement + "px)";
      } else if (event.deltaY > 0) {
        movement = movement - 100;
        container.style.transform = "translateX(" + movement + "px)";
      }
    }, 100);
  });

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        }
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.removeEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
})();
