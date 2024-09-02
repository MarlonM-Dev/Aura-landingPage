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

gsap.fromTo(
  ".about__title, .about__description",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".about__title",
      start: "0% center",
      end: "bottom center",

      scrub: 1,
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

function animateOnScroll(target, trigger) {
  gsap.fromTo(
    target,
    {
      y: -200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none reset",
        scrub: 1,
      },
    }
  );
}

animateOnScroll(".hero", ".hero");
animateOnScroll(".about", ".about");
animateOnScroll(".services", ".services");
animateOnScroll(".contact", ".contact");
