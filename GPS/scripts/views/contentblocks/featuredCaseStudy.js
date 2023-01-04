(function () {
  gsap.registerPlugin(ScrollTrigger);
  console.log("featuredCaseStudy");

  const featuredCaseStudyBlocks = document.querySelectorAll(
    ".cb-featuredCaseStudy"
  );

  featuredCaseStudyBlocks.forEach((block) => {
    const fullWidthTransition = block.querySelector(".fullWidthTransition");
    const cardLottie = block.querySelector(".lottie");
    const cardWrap = block.querySelector(".cardWrap");
    const cardTransition = block.querySelector(".transition");

    const greenFullScreenWipe = lottie.loadAnimation({
      container: cardLottie,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "lottie/fullScreen/green_FullWidthWipe.json",
    });

    const setActiveCard = () => {
      console.log("set active card...");
      greenFullScreenWipe.goToAndPlay(0, true);
      fullWidthTransition.classList.add("cardActive");
    };

    removeActiveCard = () => {
      console.log("removing active card...");
      fullWidthTransition.classList.remove("cardActive");
    };

    ScrollTrigger.create({
      trigger: block,
      start: "top bottom",
      onEnter: () => setActiveCard(),
      onLeave: () => removeActiveCard(),
      onLeaveBack: () => removeActiveCard(),
    });

    const scrollBlockCard = block.querySelector(".scrollBlock .card");
    const scrollBlockCardHeight = scrollBlockCard.offsetHeight;
    const scrollBlockCardWidth = scrollBlockCard.offsetWidth;

    var cardEnd =
      fullWidthTransition.offsetHeight +
      scrollBlockCardHeight * 0.5 +
      fullWidthTransition.offsetHeight / 2;
    console.log(cardEnd);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: fullWidthTransition,
          start: "top top",
          end: cardEnd.toString(),
          //   end: "bottom bottom-=1200px",
          scrub: true,
          pin: cardTransition,
          onEnterBack() {
            fullWidthTransition.classList.add("cardActive");
          },
          onLeave() {
            fullWidthTransition.classList.remove("cardActive");
          },
        },
      })
      .to(cardWrap, {
        width: scrollBlockCardWidth,
        height: scrollBlockCardHeight,
      });
  });
})();
