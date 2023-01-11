(function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia(),
    breakPoint = 1050;

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
      rightAnimation.play();
    };

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        ScrollTrigger.create({
          trigger: block,
          start: isMobile && "top center",
          onEnter: () => setActiveState(),
        });
      }
    );
  });
})();
