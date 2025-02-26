class Gundam {
  constructor(name, grade, scale, series, image, link) {
    this.name = name;
    this.grade = grade;
    this.scale = scale;
    this.series = series;
    this.image = `./images/${image}.webp`;
    this.link = link;
  }

  getSection() {
    return `
        <div class="card">
            <h2>${this.name}</h2>
            <img src="${this.image}" alt="${this.name} Gundam model kit fully assembled.">
        </div>
        `;
  }
}

const wingzero = new Gundam(
  "Wing Zero",
  "MG",
  "1/100",
  "Gundam Wing",
  "wingzero",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-wing-gundam-zero-ew-ver-ka"
);

const epyon = new Gundam(
  "Epyon",
  "MG",
  "1/100",
  "Gundam Wing",
  "epyon",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-gundam-epyon-ew-ver"
);

const deathscythe = new Gundam(
  "Deathscythe",
  "MG",
  "1/100",
  "Gundam Wing",
  "deathscythe",
  "https://www.usagundamstore.com/collections/gundam-wing/products/mg-1-100-gundam-deathscythe-hell-ew"
);

const heavyarms = new Gundam(
  "Heavyarms",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "heavyarms",
  "https://www.usagundamstore.com/collections/gundam-wing/products/p-bandai-hgac-1-144-gundam-heavyarms-custom"
);

const sandrock = new Gundam(
  "Sandrock",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "sandrock",
  "https://www.usagundamstore.com/collections/gundam-wing/products/p-bandai-hgac-1-144-gundam-sandrock-custom"
);

const shenlong = new Gundam(
  "Shenlong",
  "HGAC",
  "1/144",
  "Gundam Wing",
  "shenlong",
  "https://www.usagundamstore.com/collections/gundam-wing/products/hgac-1-144-242-shenlong-gundam"
);

const gaia = new Gundam(
  "Gaia",
  "HGGS",
  "1/144",
  "Gundam Seed",
  "gaia",
  "https://www.usagundamstore.com/collections/gundam-seed/products/hg-1-144-20-gaia-gundam"
);

const fx = new Gundam(
  "FX-550",
  "RG",
  "1/144",
  "Gundam Seed",
  "fx550",
  "https://www.usagundamstore.com/collections/gundam-seed/products/rg-1-144-06-fx-550-skygrasper-launcher-sword-pack"
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

const RenderGallery = () => {
  document.getElementById("gallery").innerHTML = gundams
    .map((el) => el.getSection())
    .join("");
};

RenderGallery();
