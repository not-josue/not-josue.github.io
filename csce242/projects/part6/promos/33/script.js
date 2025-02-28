const GetPokemon = async (id) => {
  try {
    const response = await fetch("../../data/pokemon.json");
    const data = await response.json();

    return data.find((el) => el.id === id);
  } catch (err) {
    console.error(err);
  }
};

const RenderAttack = (obj) => {
  const wrapperDiv = document.createElement("div");

  const headerDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("card-image-wrapper");
  //   Add images to attacks if needed
  if (obj.costs) {
    obj.costs.forEach((el) => {
      for (let i = 0; i < el.amount; ++i) {
        const imageEl = document.createElement("img");
        imageEl.src = `../../assets/energies/${el.type}_energy.png`;
        imageEl.alt = "";
        imageEl.height = "24";
        imageEl.width = "24";
        imageDiv.append(imageEl);
      }
    });
    headerDiv.append(imageDiv);
  }
  //   Create Name
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("card-attack-name");

  const h3El = document.createElement("h3");
  h3El.textContent = obj.name;
  nameDiv.append(h3El);

  if (obj.value) {
    const h3Value = document.createElement("h3");
    h3Value.textContent = obj.value;
    nameDiv.append(h3Value);
  }

  headerDiv.append(nameDiv);

  //   Add Div to Wrapper
  wrapperDiv.append(headerDiv);

  // If Attack has description
  if (obj.description) {
    const pEl = document.createElement("p");
    pEl.textContent = obj.description;
    wrapperDiv.append(pEl);
  }

  return wrapperDiv;
};

const RenderPokemon = async (num) => {
  try {
    const pokemon = await GetPokemon(num);

    // Destructure Object
    const {
      artist,
      attacks,
      description,
      id,
      image,
      name,
      retreat,
      set,
      stats,
      weakness,
    } = pokemon;

    // Set Image
    const imageEl = document.querySelector("main img");
    imageEl.src = `../${image}`;
    imageEl.alt = `promo card #${id} from Pokémon TCG Pocket`;

    // Set Name
    document.getElementById("card-name").textContent = name;

    // Set Stage
    document.getElementById("card-stage").textContent = stats.stage;

    // Set HP
    document.getElementById("card-hp").textContent = `HP ${stats.hp}`;

    // Set Energy
    const cardTypeEnergy = document.getElementById("card-type-energy");
    cardTypeEnergy.src = `../../assets/energies/${stats.type}_energy.png`;

    // Set Attack
    const attackSection = document.querySelector(".poke-attack");
    attacks.forEach((atk) => {
      attackSection.append(RenderAttack(atk));
    });

    // Set Weakness Image
    document.querySelector(
      "#weakness-div img"
    ).src = `../../assets/energies/${weakness}_energy.png`;

    // Set Retreat
    if (retreat) {
      const retreatEl = document.getElementById("retreat-div");
      const retreatImgDiv = document.createElement("div");
      for (let i = 0; i < retreat; ++i) {
        const retreatImg = document.createElement("img");
        retreatImg.src = "../../assets/energies/normal_energy.png";
        retreatImg.height = "24";
        retreatImg.width = "24";
        retreatImgDiv.append(retreatImg);
      }
      retreatEl.append(retreatImgDiv);
    }

    // Set Collection #
    document.getElementById("collection-number").textContent = id;

    // Card Set
    document.getElementById("card-set").textContent = set;

    // Set Card Description
    document.getElementById("card-description").textContent = description;

    // Set Illustrator
    document.getElementById("illustrator").textContent = artist;
  } catch (err) {
    console.error(err);
  }
};

const id = 33;
RenderPokemon(id);

// Description for Each Page
const meta = document.createElement("meta");
meta.name = "description";
meta.content = `View the promo card #${id} from Pokémon TCG Pocket.`;
document.head.append(meta);
