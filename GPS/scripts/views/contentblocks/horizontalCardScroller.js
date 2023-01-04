(function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  //horizontal scroll
  const thisPinWrap = document.querySelectorAll(
    ".cb-horizontalCardScroller .pinWrap"
  )[0];
  const horizontal = document.querySelectorAll(
    ".cb-horizontalCardScroller .horizontalWrap"
  )[0];
  const thisAnimWrap = document.querySelector(
    ".cb-horizontalCardScroller .animationWrap"
  );
  const horizontalLottieDesktop = document.querySelector(
    ".cb-horizontalCardScroller .lottie-horizontalAnimationDesktop"
  );
  const lottieMobile = document.querySelector(
    ".cb-horizontalCardScroller .lottie-animationMobile"
  );

  mm.add("(min-width: 1050px)", () => {
    //horizontal scroll functionality
    horizontalAnimationDesktop = lottie.loadAnimation({
      container: horizontalLottieDesktop,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/contentblocks/horizontalCardScroller/lightblue_Strip.json"
    });

    var endValue = thisAnimWrap.scrollWidth - window.innerWidth;
    gsap.fromTo(
      thisAnimWrap,
      {
        x: 0
      },
      {
        x: -(thisAnimWrap.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top top",
          end: endValue.toString(),
          pin: thisPinWrap,
          invalidateOnRefresh: true,
          scrub: true,
          onEnter() {
            horizontal.classList.add("pinActive");
            horizontalAnimationDesktop.goToAndPlay(0, true);
            ScrollTrigger.refresh();
          },
          onLeaveBack() {
            horizontal.classList.remove("pinActive");
            ScrollTrigger.refresh();
          }
        }
      }
    );
  });

  mm.add("(max-width: 1049px)", () => {
    mm.revert();

    animationMobile = lottie.loadAnimation({
      container: lottieMobile,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "images/contentblocks/horizontalCardScroller/lightblue_strip-mobile.json"
    });

    ScrollTrigger.create({
      trigger: horizontal,
      start: "top top",
      once: true,
      onEnter() {
        horizontal.classList.add("mobileActive");
        animationMobile.goToAndPlay(0, true);
      }
    });
  });
})();
