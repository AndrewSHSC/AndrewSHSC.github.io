(function () {
  gsap.registerPlugin(ScrollTrigger);

  const imageCollageBlocks = document.querySelectorAll(".cb-imageCollage");

  imageCollageBlocks.forEach((block) => {
    const lottieTopContainer = block.querySelector(".lottieSeparatorTop");
    const lottieBottomContainer = block.querySelector(".lottieSeparatorBottom");

    const collage = block.querySelector(".collage");
    const images = collage.querySelectorAll(".img");

    const createAnimation = (container, path) => ({
      container: container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: path,
    });

    const topAnimation = lottie.loadAnimation(
      createAnimation(lottieTopContainer, "lottie/separators/2/2a_cd-w.json")
    );

    const bottomAnimation = lottie.loadAnimation(
      createAnimation(lottieBottomContainer, "lottie/separators/1/1a_w-cd.json")
    );

    ScrollTrigger.create({
      trigger: block,
      start: "top center",
      end: "center bottom",
      onEnter: () => topAnimation.goToAndPlay(0, true),
      onLeave: () => bottomAnimation.goToAndPlay(0, true),
    });

    const fadeInImages = () => {
      console.log(images);
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
