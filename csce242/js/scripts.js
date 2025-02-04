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

// Removes Color Classes from html el
const RemoveColors = () => {
  colors.forEach((color) => {
    if (html.classList.contains(color)) {
      html.classList.remove(color);
      return;
    }
  });
};

colorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    //   Set preferences in local storage
    if (localStorage.color === id) return;
    else {
      localStorage.color = id;
      RemoveColors();
      html.classList.add(`${localStorage.color}`);
    }
  });
});

// Data Settings
document.getElementById("data-settings").onclick = () => {
  html.classList.toggle("projects");
  // Set preferences in local storage
  if (html.classList.contains("projects")) {
    localStorage.data = "projects";
  } else localStorage.data = "assignments";
};
