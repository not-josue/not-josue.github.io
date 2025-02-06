// Adds a p element when a div is clicked
const SayHello = () => {
  const divEl = document.getElementById("hello");

  divEl.onclick = () => {
    const p = document.createElement("p");
    p.textContent = "Say Hello";
    divEl.appendChild(p);
  };
};

// Changes SVG fill when a color is picked
const StarColor = () => {
  const inputEl = document.querySelector("#color input");
  const svgEl = document.querySelector("#color svg");
  inputEl.onchange = () => {
    svgEl.setAttribute("fill", inputEl.value);
  };
};

const ChangeImage = () => {
  const imageUrls = [
    "https://images.freeimages.com/images/large-previews/cb4/twilight-1056146.jpg?fmt=webp&w=500",
    "https://images.freeimages.com/images/large-previews/609/underwater-1170130.jpg?fmt=webp&w=500",
    "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.webp?b=1&s=612x612&w=0&k=20&c=AEdet7VjzfV3m-m67cUA6wkmVocYoifU0f13BrObQOc=",
    "https://images.freeimages.com/images/large-previews/bc4/fall-flower-1183908.jpg?fmt=webp&w=500",
    "https://images.freeimages.com/images/large-previews/e79/water-1172355.jpg?fmt=webp&w=500",
    "https://images.freeimages.com/images/large-previews/0ba/storm-1312727.jpg?fmt=webp&w=500",
  ];
  let counter = 0;

  const imgEl = document.querySelector("#image img");
  imgEl.onclick = () => {
    ++counter;
    if (counter === imageUrls.length) counter = 0;
    imgEl.src = imageUrls[counter];
  };
};

window.onload = () => {
  SayHello();
  StarColor();
  ChangeImage();
};
