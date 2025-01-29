// Open and close Search Dropdown
const mobileSearchBtn = document.getElementById("mobile-search");
const searchInput = document.querySelector("#search-menu input");
mobileSearchBtn.onclick = () => {
  const isExpanded = mobileSearchBtn.ariaExpanded === "true";
  mobileSearchBtn.ariaExpanded = !isExpanded;
  // focus input element when it is shown
  if (!isExpanded) searchInput.focus();
};

// Open and close Mobile Navigation
const burgerBtn = document.getElementById("hamburger");
burgerBtn.onclick = () => {
  const isExpanded = burgerBtn.ariaExpanded === "true";
  burgerBtn.ariaExpanded = !isExpanded;
};
