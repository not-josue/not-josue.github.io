// Hamburger
const burger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const body = document.querySelector("body");

/* 
- Changes aria-expanded of mobile nav button
- Toggles Mobile Menu
- Toggles overflow to the body element to keep user from scrolling
*/
burger.onclick = () => {
  const isExpanded = burger.ariaExpanded === "true";
  burger.ariaExpanded = !isExpanded;
  mobileNav.classList.toggle("hidden");
  body.classList.toggle("overflow");
};
