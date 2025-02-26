class Gundam {
  constructor(name, grade, scale, series, image, link, msrp) {
    this.id = image;
    this.name = name;
    this.grade = grade;
    this.scale = scale;
    this.series = series;
    this.image = `./images/${image}.webp`;
    this.link = link;
    this.msrp = msrp;
  }

  getSection() {
    return `
        <section class="card" data-mode="${this.id}">
            <h2>${this.name}</h2>
            <img src="${this.image}" alt="${this.name} Gundam model kit fully assembled.">
        </section>
        `;
  }

  getExpandedSection() {
    return `
    <section>
        <form method="dialog">
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18"
                    viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
            </button>
        </form>
        <div id="modal-content-wrapper">
            <div id="modal-info">
                <h2>${this.name}</h2>
                <p><b>Grade:</b> ${this.grade}</p>
                <p><b>Scale:</b> ${this.scale}</p>
                <p><b>Series:</b> ${this.series}</p>
                <p><b>MSRP:</b> $${this.msrp}</p>
                <a href="${this.link}" target="_blank" rel="noopener noreferrer" aria-label="Visit usa gundam store.">
                    Purchase
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path
                            d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l40 40-71 71C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l71-71 40 40c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-144c0-8.8-7.2-16-16-16l-144 0z" />
                    </svg>
                </a>
            </div>
            <img src="${this.image}" alt="${this.name} Gundam model kit fully assembled.">
        </div>
    </section>
    `;
  }
}

const wingzero = new Gundam(
  "Wing Zero",
  "MG",
  "1/100",
  "Gundam Wing",
  "wingzero",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-wing-gundam-zero-ew-ver-ka",
  69.99
);

const epyon = new Gundam(
  "Epyon",
  "MG",
  "1/100",
  "Gundam Wing",
  "epyon",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-gundam-epyon-ew-ver",
  52.99
);

const deathscythe = new Gundam(
  "Deathscythe",
  "MG",
  "1/100",
  "Gundam Wing",
  "deathscythe",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-gundam-deathscythe-hell-ew",
  49.99
);

const heavyarms = new Gundam(
  "Heavyarms",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "heavyarms",
  "https://www.usagundamstore.com/collections/gundam-wing/products/p-bandai-hgac-1-144-gundam-heavyarms-custom",
  22.99
);

const sandrock = new Gundam(
  "Sandrock",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "sandrock",
  "https://www.usagundamstore.com/collections/gundam-wing/products/p-bandai-hgac-1-144-gundam-sandrock-custom",
  22.99
);

const shenlong = new Gundam(
  "Shenlong",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "shenlong",
  "https://www.usagundamstore.com/collections/gundam-wing/products/hgac-1-144-242-shenlong-gundam",
  22.99
);

const gaia = new Gundam(
  "Gaia",
  "HGGS",
  "1/144",
  "Gundam Seed",
  "gaia",
  "https://www.usagundamstore.com/collections/gundam-seed/products/hg-1-144-20-gaia-gundam",
  20.99
);

const fx = new Gundam(
  "FX-550",
  "RG",
  "1/144",
  "Gundam Seed",
  "fx550",
  "https://www.usagundamstore.com/collections/gundam-seed/products/rg-1-144-06-fx-550-skygrasper-launcher-sword-pack",
  31.99
);

const gundams = [
  wingzero,
  epyon,
  deathscythe,
  heavyarms,
  sandrock,
  shenlong,
  gaia,
  fx,
];

// Populates the Gallery
const RenderGallery = () => {
  document.getElementById("gallery").innerHTML = gundams
    .map((el) => el.getSection())
    .join("");
};

// Helper Function to display the data of the card that was clicked
const FindGundam = (array, target) => {
  return array.find((el) => el.id === target);
};

const modal = document.getElementById("modal");
const RenderModal = () => {
  document.querySelectorAll(".card").forEach((card) => {
    card.onclick = (e) => {
      const target = e.currentTarget.dataset.mode;
      const gundam = FindGundam(gundams, target);
      modal.innerHTML = gundam.getExpandedSection();
      modal.showModal();
    };
  });
};

RenderGallery();
RenderModal();
