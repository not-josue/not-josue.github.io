document.getElementById("btn-click-me").onclick = () => {
  console.log("WOW!");
  document.getElementById("result").textContent = "Hello";
};

document.getElementById("btn-color").onclick = () => {
  const messageP = document.getElementById("message");
  messageP.textContent = "Goodbye";
  messageP.classList.toggle("sad");
};
