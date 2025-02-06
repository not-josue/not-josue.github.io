document.getElementById("btn-click-me").onclick = () => {
  console.log("WOW!");
  document.getElementById("result").textContent = "Hello";
};

document.getElementById("btn-color").onclick = () => {
  const messageP = document.getElementById("message");
  messageP.textContent = "Goodbye";
  messageP.classList.toggle("sad");
};

// Happy Script
document.getElementById("btn-happy").onclick = () => {
  const displayP = document.getElementById("display");
  displayP.classList.remove("hidden");
  displayP.classList.add("good-times");
  displayP.textContent = "Good Times";
};

// Sad Script
document.getElementById("btn-sad").onclick = () => {
  const displayP = document.getElementById("display");
  displayP.classList.remove("hidden");
  displayP.classList.add("bad-times");
  displayP.textContent = "Bad Times";
};

// Clear Script
document.getElementById("btn-clear").onclick = () => {
  const displayP = document.getElementById("display");
  displayP.classList.add("hidden");
};

// Emotion Script
const inputEl = document.getElementById("emotions");
inputEl.onkeyup = (e) => {
  document.getElementById("copy").textContent =
    "You are feeling " + e.currentTarget.value;
};
