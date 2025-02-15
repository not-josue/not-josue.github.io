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

// User Input
document.getElementById("btn-choose-color").onclick = () => {
  const inputEl = document.getElementById("txt-color");

  if (!inputEl.value) return;

  const pEl = document.getElementById("color-message");
  pEl.textContent = `You choose ${inputEl.value}`;
  pEl.style.color = inputEl.value;
};

// Ball Animation
const AnimateBall = () => {
  const upBtn = document.getElementById("btn-up");
  const downBtn = document.getElementById("btn-down");
  const inputEl = document.querySelector("#ball-area input");
  const circle = document.getElementById("circle");

  inputEl.onchange = () => {
    // circle.style.backgroundColor = inputEl.value;
    circle.style.setProperty("--circle-color", inputEl.value);
  };

  let pos = 0;

  const changeCirclePos = (increment) => {
    pos += increment;
    circle.style.setProperty("top", pos + "px");
  };

  upBtn.onclick = () => {
    changeCirclePos(-10);
  };

  downBtn.onclick = () => {
    changeCirclePos(10);
  };
};

AnimateBall();

// Donations
const GOAL = 1000;
document.querySelector("#donations h2").textContent = `Goal $${GOAL}`;

const Donation = () => {
  let currentDonations = 0;
  const buttonEl = document.getElementById("btn-add-donation");
  const inputEl = document.getElementById("txt-donation");
  const spanEl = document.getElementById("donation-error");
  const pEl = document.getElementById("donation-message");
  const divEl = document.getElementById("thermometer");

  buttonEl.onclick = () => {
    const inputValue = Number(inputEl.value);

    if (isNaN(inputValue) || inputValue <= 0) {
      spanEl.classList.remove("hidden");
      return;
    }

    currentDonations += inputValue;
    const donationPercent = (GOAL / 100) * 100;
    spanEl.classList.add("hidden");
    pEl.textContent = `${GOAL - currentDonations} To Go!`;
    divEl.style.setProperty("--donation-percent", donationPercent);
  };
};

Donation();
