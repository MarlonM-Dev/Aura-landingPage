gsap.fromTo(
  ".hero__img, .overlay",
  {
    transform: "rotateX(20deg)",
  },
  {
    transform: "rotateX(-10deg)",
    scrollTrigger: {
      trigger: ".hero__img, .overlay",
      start: "top center",
      end: "bottom center",

      scrub: 2,
    },
  }
);

const learnMore = document.querySelector(".hero__cta");

learnMore.addEventListener("mouseover", () => {
  gsap.to(".hero__arrow", {
    y: 20,
    scale: 1.3,
  });
});

learnMore.addEventListener("mouseout", () => {
  gsap.to(".hero__arrow", {
    y: 0,
    scale: 1,
  });
});

function animateOnScroll(target, trigger, overlay) {
  gsap.fromTo(
    target,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: overlay,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none reset",
        scrub: 1,
      },
    }
  );
}

animateOnScroll(".hero", ".hero", 1);
animateOnScroll(".hero__img", ".hero__img", 1);
animateOnScroll(".overlay", ".overlay", 0.1);
animateOnScroll(".about", ".about", 1);
animateOnScroll(".services", ".services", 1);
animateOnScroll(".contact", ".contact", 1);
