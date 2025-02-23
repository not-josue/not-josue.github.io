// Renders all the modal buttons
const PopulateButtons = () => {
  const modalBtnsArray = [
    {
      name: "Happy Birthday",
      data: "birthday",
      emoji: "🎉",
    },
    {
      name: "Crazy Clown",
      data: "clown",
      emoji: "🤡",
    },
    {
      name: "It's Raining",
      data: "rain",
      emoji: "☔",
    },
    {
      name: "Quiet Time",
      data: "read",
      emoji: "🤫",
    },
    {
      name: "Working Hard",
      data: "shovel",
      emoji: "😓",
    },
    {
      name: "Work from Home",
      data: "work",
      emoji: "💻",
    },
  ];

  document.getElementById("button-group").innerHTML = modalBtnsArray
    .map(
      (el) =>
        `
        <button data-mode="${el.data}" class="modal-btn">${el.name} ${el.emoji}</button>
        `
    )
    .join("");
};

PopulateButtons();

// Modal Operations

const ModalOps = () => {
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
};

ModalOps();
