const button = document.querySelector("aside>button");

button.onclick = () => {
  const isExpanded = button.ariaExpanded === "true";
  button.ariaExpanded = !isExpanded;
};
