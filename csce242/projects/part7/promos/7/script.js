const GetItem = async (id) => {
  try {
    const response = await fetch("../../data/supporters.json");
    const data = await response.json();

    return data.find((el) => el.id === id);
  } catch (err) {
    console.error(err);
  }
};

const RenderTrainer = async (num) => {
  try {
    const item = await GetItem(num);

    // Destructure Object
    const { action, artist, description, id, image, name, set, type } = item;

    // Set Image
    const imageEl = document.querySelector("main img");
    imageEl.src = `../${image}`;
    imageEl.alt = `promo card #${id} from Pokémon TCG Pocket`;

    // Set Name
    document.getElementById("card-name").textContent = name;

    // // Set Type
    document.getElementById("card-stage").textContent = type;

    // Set Action
    const actionSection = document.querySelector(".item-action");
    const itemAction = document.createElement("p");
    itemAction.textContent = action;
    actionSection.append(itemAction);

    // Set Description
    const descriptionSection = document.querySelector(".item-description");
    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    descriptionSection.append(itemDescription);

    // Set Collection #
    document.getElementById("collection-number").textContent = id;

    // Card Set
    document.getElementById("card-set").textContent = set;

    // Set Illustrator
    document.getElementById("illustrator").textContent = artist;
  } catch (err) {
    console.error(err);
  }
};

const id = 7;
RenderTrainer(id);

// Description for Each Page
const meta = document.createElement("meta");
meta.name = "description";
meta.content = `View the promo card #${id} from Pokémon TCG Pocket.`;
document.head.append(meta);
