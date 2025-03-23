const divEl = document.getElementById("set-releases");

// Creates cards from an array
const CreateCards = (arr) => {
  return arr
    .map((el) => {
      return `
        <section class="release-card">
            <header>
                <h2>${el.name}</h2>
                <p><i>Release Date: ${el.date}</i></p>
                <p>Total Cards: ${el.cards}</p>
            </header>
            <iframe src="${el.url}" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>${el.description}</p>
            <hr>
        </section>
        `;
    })
    .join("");
};

// Fetches releases.json
const FetchData = async () => {
  try {
    const response = await fetch("../data/releases.json");
    const data = await response.json();
    const releases = [...data].reverse();

    divEl.innerHTML = CreateCards(releases);
  } catch (e) {
    console.error(e);
  }
};

FetchData();
