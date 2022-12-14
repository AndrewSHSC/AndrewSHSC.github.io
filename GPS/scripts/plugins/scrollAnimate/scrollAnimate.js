(function() {
  var components = document.querySelectorAll(".scrollAnimate");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scrollAnimate-active");
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  components.forEach((el) => observer.observe(el));
})();
