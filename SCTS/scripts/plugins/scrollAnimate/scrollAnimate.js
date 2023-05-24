(function () {
  var components = document.querySelectorAll(".scrollAnimate");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  const observerLongOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };

  function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("isActive");
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const observerLong = new IntersectionObserver(
    observerCallback,
    observerLongOptions
  );

  components.forEach((el) => {
    if (el.offsetHeight > window.innerHeight) {
      observerLong.observe(el);
    } else {
      observer.observe(el);
    }
  });
})();
