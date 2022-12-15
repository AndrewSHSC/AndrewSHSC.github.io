(function () {
  gsap.registerPlugin(ScrollTrigger);
  const featuredGrids = document.querySelectorAll(".cb-featuredGrid");

  featuredGrids.forEach((block) => {
    const cards = block.querySelectorAll(".card");

    const setActiveState = (card) => {
      card.classList.add("active");
      card.querySelector(".img").classList.add("active");
    };

    gsap.utils.toArray(cards).forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => setActiveState(card),
      });
    });
  });
})();
