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

// Closes Mobile Nav on Resize
window.onresize = () => {
  if (window.innerWidth >= 1024 && burger.ariaExpanded === "true") {
    burger.click();
  }
};

// Dark/Light Mode
const html = document.documentElement;
const lgThemeBtn = document.getElementById("lg-theme-btn");
const smThemeBtn = document.getElementById("sm-theme-btn");

// Toggles Light Theme and Dark Theme
const SetTheme = (el) => {
  el.onclick = () => {
    html.classList.toggle("dark");
    //   Set preferences in local storage
    if (html.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };
};

SetTheme(lgThemeBtn);
SetTheme(smThemeBtn);
