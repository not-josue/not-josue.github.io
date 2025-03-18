const GetShoes = async () => {
  const url = "https://portiaportia.github.io/json/shoes.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const ShowShoes = async () => {
  const shoes = await GetShoes();
  const shoesSection = document.getElementById("shoes-section");

  shoes.forEach((shoe) => {
    const section = document.createElement("section");
    section.classList.add("json-card");
    // h3
    const h3 = document.createElement("h3");
    h3.textContent = shoe.name;
    section.append(h3);
    // brand
    const p = document.createElement("p");
    p.textContent = `Brand: ${shoe.brand}`;
    section.append(p);
    // List
    const ul = document.createElement("ul");
    shoe.reviews.forEach((review) => {
      const li = document.createElement("li");
      li.textContent = review;
      ul.append(li);
    });
    section.append(ul);

    shoesSection.append(section);
  });
};

ShowShoes();
