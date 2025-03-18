//https://api.openbrewerydb.org/breweries

const GetBreweries = async () => {
  const url = "https://api.openbrewerydb.org/breweries";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const ShowBreweries = async () => {
  const breweriesSection = document.getElementById("breweries");
  const breweries = await GetBreweries();

  const section = document.createElement("section");
  section.classList.add("json-card");
};

ShowBreweries();
