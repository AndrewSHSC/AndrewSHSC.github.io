(function () {
  gsap.registerPlugin(ScrollTrigger);
  const bodyWrapper = document.querySelectorAll(".contentWrapper")[0];

  // lottie
  let container = document.getElementById("test");
  let animation;
  let animationCompleted = true;

  animation = lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./lottie/pink-pattern.json"
  });

  animation.addEventListener("complete", () => {
    animationCompleted = true;
    bodyWrapper.classList.add("pageLoaded");
  });

  window.addEventListener("load", function () {
    if (animationCompleted) {
      animation.goToAndPlay(0, true);
      animationCompleted = false;
    }
  });

  //horizontal scroll

  var thisPinWrap = document.querySelectorAll(".pin-wrap")[0];
  var topText = document.querySelectorAll(".topText")[0];
  var horizontal = document.querySelectorAll(".horizontal")[0];
  var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");
  var cardLottie = document.querySelectorAll(".cardTransition .lottie")[0];
  var cardWrap = document.querySelectorAll(".cardTransition .cardWrap")[0];
  var card = document.querySelectorAll(".cardTransition")[0];
  var cardTransition = document.querySelectorAll(
    ".cardTransition .transition"
  )[0];

  animation2 = lottie.loadAnimation({
    container: cardLottie,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "lottie/green-pattern-wipe.json"
  });

  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

  gsap.fromTo(
    thisAnimWrap,
    {
      x: 0
    },
    {
      x: getToValue(),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: thisAnimWrap.scrollWidth - window.innerWidth,
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        scrub: true,

        onEnter() {
          horizontal.classList.add("pinActive");
          topText.classList.add("pinActive");
        },
        onEnterBack() {
          horizontal.classList.remove("cardActive");
          card.classList.remove("cardActive");
        },
        onLeaveBack() {
          horizontal.classList.remove("pinActive");
          topText.classList.remove("pinActive");
        },
        onLeave() {
          animation2.goToAndPlay(0, true);
          horizontal.classList.add("cardActive");
          card.classList.add("cardActive");
        }
      }
    }
  );

  //card transition

  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: "top top",
        end: () => innerHeight * 3,
        scrub: true,
        pin: cardTransition,
        anticipatePin: 1
      }
    })
    .to(cardWrap, {
      top: 100,
      width: 383,
      height: 603
    });
})();
