(function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia(),
    breakPoint = 1050;

  const imageCollageBlocks = document.querySelectorAll(".cb-imageCollage");

  imageCollageBlocks.forEach((block) => {
    const collage = block.querySelector(".collage");
    const images = collage.querySelectorAll(".img");

    const fadeInImages = () => {
      images.forEach(async (img) => {
        img.classList.add("active");
      });
    };

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`
      },
      (context) => {
        let { isDesktop } = context.conditions;

        ScrollTrigger.create({
          trigger: block,
          start: isDesktop ? "top center" : "top center+=200px",
          onEnter: () => fadeInImages()
        });
      }
    );
  });
})();
