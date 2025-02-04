// alert("Hello");
// console.log("hi me");

// Version 1 where we learned arrow functions
const DoStuff = () => {
  console.log("doing stuff");
};

// Runs immediately
// document.getElementById("btn-click-me").onclick = DoStuff();

// Runs "onclick"
document.getElementById("btn-click-me").onclick = DoStuff;
