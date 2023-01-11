(function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia(),
    breakPoint = 1050;

  const featuredGrids = document.querySelectorAll(".cb-featuredGrid");

  featuredGrids.forEach((block) => {
    const cards = block.querySelectorAll(".card");

    const setActiveState = (card) => {
      card.classList.add("active");
      card.querySelector(".img").classList.add("active");
    };

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        gsap.utils.toArray(cards).forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: isMobile && "top center+=50px",
            onEnter: () => setActiveState(card),
          });
        });
      }
    );
  });
})();
