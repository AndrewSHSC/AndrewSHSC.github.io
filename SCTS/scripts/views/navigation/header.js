(() => {
  const mainHeader = document.querySelector(".header");
  const utilitynav = document.querySelector(".utilityNavigation");

  let utilitynavHeight = utilitynav.offsetHeight;
  let threshold = 0;
  let lastScroll = 0;

  if (window.scrollY > 0) {
    mainHeader.classList.add("stickyHeaderActive");
  }

  window.addEventListener("scroll", () => {
    const newScroll = window.scrollY;
    const diff = newScroll - lastScroll;

    if (newScroll > 0) {
      threshold =
        threshold + diff > utilitynavHeight
          ? utilitynavHeight
          : threshold + diff;
      threshold = threshold < 0 ? 0 : threshold;

      mainHeader.style.top = `-${threshold}px`;

      lastScroll = newScroll;
      mainHeader.classList.add("stickyHeaderActive");
    } else if (newScroll <= 100) {
      mainHeader.style.top = 0;
      mainHeader.classList.remove("stickyHeaderActive");
    }
  });
})();
