document.getElementById("btn-display").onclick = () => {
  const firstInput = Number.parseInt(
    document.getElementById("txt-start").value
  );
  const secondInput = Number.parseInt(document.getElementById("txt-end").value);
  const error = document.getElementById("error-num-order");
  const displayArea = document.getElementById("start-end-display");

  const favMessageP = document.getElementById("fav-message");

  error.textContent = "";
  displayArea.innerHTML = "";
  favMessageP.innerHTML = "";

  if (!firstInput || !secondInput) error.textContent = "No Input";

  if (secondInput < firstInput)
    error.textContent = `${secondInput} is less than ${firstInput}`;

  for (let i = firstInput; i <= secondInput; ++i) {
    const li = document.createElement("li");
    li.textContent = i;
    displayArea.append(li);
    // Attach event to onclick li
    li.onclick = () => {
      favMessageP.textContent = `You clicked ${i}`;
    };
  }
};
