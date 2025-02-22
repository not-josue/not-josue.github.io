const gallery = document.getElementById("gallery");
let sortedData = {};

const RenderFigure = (id, image) => {
  return `
  <figure>
        <a href="../promos/${id}">
            <img src="${image}" alt="promo card #${id} from Pokémon TCG Pocket" width="200" height="279">
        </a>
        <figcaption>
            <button class="fave" aria-label="Add to Favorites">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
            </button>
            <button class="wish" aria-label="Add to Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"
                    viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
            </button>
        </figcaption>
    </figure>
  `;
};

const RenderGallery = (array) => {
  // Fill Gallery
  for (let i = 0; i < array.length; ++i) {
    // Destructure Image Key
    const { id, image } = array[i];

    gallery.innerHTML += RenderFigure(id, image);
  }

  // Toggles classes to buttons for favorites and wishlist
  const favorites = Array.from(document.querySelectorAll(".fave"));
  favorites.forEach((btn) => {
    btn.onclick = (e) => {
      e.target.classList.toggle("yellow");
    };
  });

  const wishes = Array.from(document.querySelectorAll(".wish"));
  wishes.forEach((btn) => {
    btn.onclick = (e) => {
      e.target.classList.toggle("red");
    };
  });
};

const FetchData = async () => {
  try {
    // File Paths
    const paths = [
      "../data/items.json",
      "../data/supporters.json",
      "../data/pokemon.json",
    ];
    // Fetch all files
    const responses = await Promise.all(paths.map((path) => fetch(path)));
    // Convert all responses
    const data = (await Promise.all(responses.map((res) => res.json()))).flat();
    // Separate By Type
    const all = [...data];
    const pokemon = all.filter((el) => el.type === "Pokemon");
    const items = all.filter((el) => el.type === "Item");
    const supporters = all.filter((el) => el.type === "Supporter");
    // Filter By Collection #
    const ascAll = all.slice().sort((x, y) => x.id - y.id);
    const descAll = all.slice().sort((x, y) => y.id - x.id);
    const ascPokemon = pokemon.slice().sort((x, y) => x.id - y.id);
    const descPokemon = pokemon.slice().sort((x, y) => y.id - x.id);
    const ascItems = items.slice().sort((x, y) => x.id - y.id);
    const descItems = items.slice().sort((x, y) => y.id - x.id);
    const ascSupporters = supporters.slice().sort((x, y) => x.id - y.id);
    const descSupporters = supporters.slice().sort((x, y) => y.id - x.id);
    // Sorted Data
    sortedData = {
      all: {
        ascending: {
          all: ascAll,
          "genetic-apex": ascAll.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": ascAll.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": ascAll.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
        descending: {
          all: descAll,
          "genetic-apex": descAll.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": descAll.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": descAll.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
      },
      pokemon: {
        ascending: {
          all: ascPokemon,
          "genetic-apex": ascPokemon.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": ascPokemon.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": ascPokemon.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
        descending: {
          all: descPokemon,
          "genetic-apex": descPokemon.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": descPokemon.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": descPokemon.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
      },
      supporter: {
        ascending: {
          all: ascSupporters,
          "genetic-apex": ascSupporters.filter(
            (el) => el.set === "Genetic Apex"
          ),
          "mythical-island": ascSupporters.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": ascSupporters.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
        descending: {
          all: descSupporters,
          "genetic-apex": descSupporters.filter(
            (el) => el.set === "Genetic Apex"
          ),
          "mythical-island": descSupporters.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": descSupporters.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
      },
      item: {
        ascending: {
          all: ascItems,
          "genetic-apex": ascItems.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": ascItems.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": ascItems.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
        descending: {
          all: descItems,
          "genetic-apex": descItems.filter((el) => el.set === "Genetic Apex"),
          "mythical-island": descItems.filter(
            (el) => el.set === "Mythical Island"
          ),
          "space-time": descItems.filter(
            (el) => el.set === "Space-Time Smackdown"
          ),
        },
      },
    };
    // End of Sorted Data
    // Initially Loaded by All Ascending All
    RenderGallery(sortedData.all.ascending["all"]);
  } catch (err) {
    console.error(err);
  }
};

FetchData();

// Sorting Gallery

const SortGallery = () => {
  const formEl = document.getElementById("promo-sorter");

  formEl.onsubmit = (e) => {
    e.preventDefault();

    const typeValue = document.getElementById("card-type").value;
    const orderValue = document.getElementById("card-order").value;
    const setValue = document.getElementById("card-set").value;

    gallery.innerHTML = "";

    RenderGallery(sortedData[typeValue][orderValue][setValue]);
  };
};

SortGallery();
