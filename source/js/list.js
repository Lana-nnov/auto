import getData from "./server.js";
import getImages from "./server.js";

const clickMeButton = document.querySelector('.button__list');
const clickMeGallery = document.querySelector('.button__gallery');

console.log(clickMeButtonGallery);

clickMeButton.addEventListener("click", () => {
  console.log("click2");
  // getData().then(createList);
  getData().then(createList); // data не передаем!!!!
});

clickMeGallery.addEventListener("click", ()=> {
  console.log("click7");
  getImages().then(createGallery);
});

// fetch("https://lana-nnov.github.io/mydata.json").then(response => response.text()).then(response2 => console.log(response2)).catch(err => console.log(err));

// axios.get("http://localhost:3001/cities").then(response => createList(response.data));

const createList = (data) => {
  console.log(data);
  data.forEach (elem => {
    const item = document.createElement('li');
    console.log(elem);
    item.innerHTML = elem;
    document.querySelector('.list_for_ajax').appendChild(item);
  });
};

const createGallery = (data) => {
  console.log(data);
};
