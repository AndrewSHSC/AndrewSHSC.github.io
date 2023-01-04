(function () {
  gsap.registerPlugin(ScrollTrigger);
  console.log("textImageCta");

  const textImageCtaBlocks = document.querySelectorAll(".cb-textImageCta");

  const createAnimation = (container, path) => ({
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: path,
  });

  textImageCtaBlocks.forEach((block) => {
    const lottieRightContainer = block.querySelector(".rightLottiePattern");
    rightAnimation = lottie.loadAnimation(
      createAnimation(
        lottieRightContainer,
        "lottie/ctas/text/blue-text-cta.json"
      )
    );

    const leftColumn = block.querySelector(".leftCol");
    const rightImage = block.querySelector(".image");

    const setActiveState = () => {
      leftColumn.classList.add("active");
      rightImage.classList.add("active");
      rightAnimation.goToAndPlay(0, true);
    };

    ScrollTrigger.create({
      trigger: block,
      start: "top center+=50px",
      onEnter: () => setActiveState(),
    });
  });
})();