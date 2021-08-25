(function ($, window, document) {
  $(function () {
    videobanner();
  });

  function videobanner() {
    var video = $(".m-videobanner #bannerVideo");
    var videoBanner = $(".m-videobanner");

    function setVidSrc() {
      if (window.innerWidth >= 992) {
        var dataSrc = $(video).attr("data-src");
        videoBanner.addClass("video-loaded");

        var source = document.createElement("source");
        source.setAttribute("src", dataSrc);
        video.append(source);

        video.on("ended", function () {
          video.get(0).play();
        });

        video.get(0).play();
      }
    }

    setVidSrc();

    matchMedia("screen and (min-width:991px)").addListener(function (
      mediaQuery
    ) {
      if (mediaQuery.matches) {
        setVidSrc();
      }
    });

    $(".m-videobanner .anchorButton").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: videoBanner.height()
        },
        800
      );
    });
  }
})(window.jQuery, window, document);
