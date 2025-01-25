// Root
const html = document.documentElement;

// Toggles Light Theme and Dark Theme
document.getElementById("bg-settings").onclick = () => {
  html.classList.toggle("dark");
  //   Set preferences in local storage
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
};

// Font Color Themes (Purple is Default)
const colors = ["blue", "green", "orange", "pink", "purple", "red"];
const colorBtns = document.querySelectorAll("#palette button");

colorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    if (localStorage.color === id) return;
    else {
      localStorage.color = id;
      RemoveColors();
      html.classList.add(`${localStorage.color}`);
    }
  });
});

// Removes Color Classes from html el
function RemoveColors() {
  colors.forEach((color) => {
    if (html.classList.contains(color)) {
      html.classList.remove(color);
      return;
    }
  });
}

// TODO: fix Focus Trapping for Popover
