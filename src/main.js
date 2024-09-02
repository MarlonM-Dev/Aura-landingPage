import "../styles/normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/services.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/utils.css";
import "./utils/gsap.js";

// smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// smooth scroll

// animate
const animateEl = document.querySelectorAll(".animate");

animateEl.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add("show");
  }, index * 150);
});
