(function () {
  gsap.registerPlugin(ScrollTrigger);

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

  //card transition
  const cardLottie = document.querySelectorAll(
    ".cardTransition .lottie-cardAnimation"
  )[0];
  const cardWrap = document.querySelectorAll(".cardTransition .cardWrap")[0];
  const card = document.querySelectorAll(".cardTransition")[0];
  const cardTransition = document.querySelectorAll(
    ".cardTransition .transition"
  )[0];

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
        },
        onEnterBack() {
          card.classList.remove("cardActive");
        },
        onLeaveBack() {
          horizontal.classList.remove("pinActive");
        },
        onLeave() {
          cardAnimation.goToAndPlay(0, true);
          card.classList.add("cardActive");
        }
      }
    }
  );

  //card scroll functionality
  cardAnimation = lottie.loadAnimation({
    container: cardLottie,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "images/contentblocks/horizontalCardScroller/green_FullWidthWipe.json"
  });

  var cardEnd =
    window.innerHeight +
    document.querySelectorAll(".scrollBlock .card")[0].offsetHeight * 1.5;
  console.log(cardEnd);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: "top top",
        end: cardEnd.toString(),
        scrub: true,
        pin: cardTransition,
        onEnterBack() {
          card.classList.add("cardActive");
        },
        onLeave() {
          card.classList.remove("cardActive");
        }
      }
    })
    .to(cardWrap, {
      top: 100,
      width: 383,
      height: 603
    });
})();
