// Toggles tabs and forms
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");

const ResetAriaPressed = () => {
  signInBtn.ariaPressed = "false";
  signUpBtn.ariaPressed = "false";
};

signInBtn.onclick = () => {
  ResetAriaPressed();
  signInBtn.ariaPressed = "true";
  signUpForm.classList.add("hidden");
  signInForm.classList.remove("hidden");
};

signUpBtn.onclick = () => {
  ResetAriaPressed();
  signUpBtn.ariaPressed = "true";
  signInForm.classList.add("hidden");
  signUpForm.classList.remove("hidden");
};
