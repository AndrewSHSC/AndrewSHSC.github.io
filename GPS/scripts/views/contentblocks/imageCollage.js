(function () {
  gsap.registerPlugin(ScrollTrigger);

  const imageCollageBlocks = document.querySelectorAll(".cb-imageCollage");

  imageCollageBlocks.forEach((block) => {
    const lottieTopContainer = block.querySelector(".lottieSeparatorTop");
    const lottieBottomContainer = block.querySelector(".lottieSeparatorBottom");

    const collage = block.querySelector(".collage");
    const images = collage.querySelectorAll(".img");

    const fadeInImages = () => {
      images.forEach(async (img) => {
        img.classList.add("active");
      });
    };

    ScrollTrigger.create({
      trigger: collage,
      start: "top center+=50px",
      onEnter: () => fadeInImages(),
    });
  });
})();
