(function () {
  const firstSlide = document.querySelectorAll(".homepageBanner .slide")[0];
  const slides = document.querySelectorAll(".homepageBanner .slide");
  const videos = document.querySelectorAll(".homepageBanner video");

  videos.forEach(function (video) {
    var dataSrc = video.getAttribute("data-src");
    var source = document.createElement("source");
    source.setAttribute("src", dataSrc);
    source.removeAttribute("data-src");
    video.appendChild(source);
  });

  var video = firstSlide.querySelectorAll("video")[0];
  if (video) {
    video.pause();
    video.currentTime = 0;
    video.play();
  }

  setTimeout(function () {
    const firstLoad = document.querySelectorAll(".homepageBanner.firstLoad")[0];
    firstLoad.classList.remove("firstLoad");
    firstSlide.nextElementSibling.classList.add("slide-isActive");

    window.setInterval(activeSlide, 6000);
  }, 6000);

  function activeSlide() {
    var activeSlide = document.querySelectorAll(
      ".homepageBanner .slide-isActive"
    )[0];

    if (activeSlide != null) {
      activeSlide.classList.remove("slide-isActive");
      var nextSlide =
        activeSlide.nextElementSibling != null
          ? activeSlide.nextElementSibling
          : firstSlide;

      if (nextSlide != null) {
        nextSlide.classList.add("slide-isActive");

        var video = nextSlide.querySelectorAll("video")[0];
        if (video) {
          video.pause();
          video.currentTime = 0;
          video.play();
        }
      }
    }
  }
})();
