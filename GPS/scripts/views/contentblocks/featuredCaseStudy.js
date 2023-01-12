(function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia(),
    breakPoint = 1050;

  const featuredCaseStudyBlocks = document.querySelectorAll(
    ".cb-featuredCaseStudy"
  );

  featuredCaseStudyBlocks.forEach((block) => {
    const fullWidthTransition = block.querySelector(".fullWidthTransition");
    const cardLottie = block.querySelector(".lottie");
    const cardInner = block.querySelector(".scrollBlock .cardInner");
    const cardWrap = block.querySelector(".cardWrap");
    const cardTransition = block.querySelector(".transition");
    const scrollBlockCard = block.querySelector(".scrollBlock .card");
    const scrollBlockCardHeight = scrollBlockCard.offsetHeight;
    const scrollBlockCardWidth = scrollBlockCard.offsetWidth;
    const horizontal = document.querySelector(
      ".cb-horizontalCardScroller .horizontalWrap"
    );

    var cardEnd =
      fullWidthTransition.offsetHeight +
      scrollBlockCardHeight * 0.5 +
      fullWidthTransition.offsetHeight / 2;

    const greenFullScreenWipe = lottie.loadAnimation({
      container: cardInner,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "lottie/fullScreen/homepage-wipe.json"
    });
    greenFullScreenWipe.goToAndPlay(0, true);

    const setActiveCard = () => {
      fullWidthTransition.classList.add("cardActive");
      horizontal.classList.add("cardActive");
    };

    removeActiveCard = () => {
      fullWidthTransition.classList.remove("cardActive");
      horizontal.classList.remove("cardActive");
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
          start: isDesktop ? "top bottom" : "top bottom-=350px",
          onEnter: () => setActiveCard(),
          onLeave: () => removeActiveCard(),
          onLeaveBack: () => removeActiveCard()
        });

        if (isDesktop) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: fullWidthTransition,
                start: "top top",
                end: cardEnd.toString(),
                scrub: true,
                pin: cardTransition,
                onEnterBack() {
                  fullWidthTransition.classList.add("cardActive");
                },
                onLeave() {
                  fullWidthTransition.classList.remove("cardActive");
                }
              }
            })
            .to(cardWrap, {
              width: scrollBlockCardWidth,
              height: scrollBlockCardHeight,
              borderRadius: "36px",
              delay: 0.2
            });

          LottieScrollTrigger({
            target: cardLottie,
            path: "lottie/fullScreen/homepage-wipe.json",
            end: "+=250",
            pin: false
          });
        } else {
          mm.revert();
        }
      }
    );

    //   fade ins
    const fadeInItems = block.querySelectorAll(".fade");

    gsap.utils.toArray(fadeInItems).forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        onEnter: () => item.classList.add("active")
      });
    });
  });

  function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
      target = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=1500", medium: "+=1000", fast: "+=500" },
      st = {
        trigger: target,
        pin: true,
        start: "top top",
        end: speeds[vars.speed] || "+=1000",
        scrub: 1
      },
      ctx = gsap.context && gsap.context(),
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
          preserveAspectRatio: "xMidYMid slice"
        }
      });
    for (let p in vars) {
      st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
      let createTween = function () {
        animation.frameTween = gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: st
        });
        return () => animation.destroy && animation.destroy();
      };
      ctx && ctx.add ? ctx.add(createTween) : createTween();

      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return animation;
  }

  addEventListener("resize", (event) => {
    ScrollTrigger.refresh();
  });
})();
