// Renders all the modal buttons
const PopulateButtons = () => {
  const modalBtnsArray = [
    {
      name: "Happy Birthday",
      data: "birthday",
    },
    {
      name: "Crazy Clown",
      data: "clown",
    },
    {
      name: "It's Raining",
      data: "rain",
    },
    {
      name: "Quiet Time",
      data: "read",
    },
    {
      name: "Working Hard",
      data: "shovel",
    },
    {
      name: "Work from Home",
      data: "work",
    },
  ];

  document.getElementById("button-group").innerHTML = modalBtnsArray
    .map(
      (el) =>
        `
        <button data-mode="${el.data}" class="modal-btn">${el.name}</button>
        `
    )
    .join("");
};

PopulateButtons();

// Modal Operations

const modalBtns = document.querySelectorAll(".modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalH2 = document.getElementById("modal-header");
const modalImg = document.getElementById("modal-img");

modalBtns.forEach((btn) => {
  btn.onclick = (e) => {
    const data = e.target.dataset.mode;
    modalH2.textContent = e.target.textContent;
    modalImg.src = `./assets/${data}.jpg`;
    modal.classList.remove("is-hidden");
    closeBtn.focus();
  };
});

closeBtn.onclick = () => {
  modal.classList.add("is-hidden");
};
