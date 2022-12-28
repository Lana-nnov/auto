let similarProductTemplate = document.querySelector('#product')
      .content
      .querySelector('.product');

let productsContainer = document.querySelector('.products');

let articlesBlock = [];

// в случае успешного ответа сервера загружаем данные !!!!!!!!!!!!!!!!!!!!!
var showLoadSuccess = function (array) {
  articlesBlock = array;
  renderArticles(articlesBlock);
  return articlesBlock;
};

let renderArticles = function (array) {
  console.log(array);
  let fragment = document.createDocumentFragment();
  array.forEach(function (element) {
    fragment.appendChild(renderArticle(element));
  });
  productsContainer.appendChild(fragment);
};

//
let renderArticle = function (product) {
  console.log('RENDER')
  let productElement = similarProductTemplate.cloneNode(true);
  productElement.querySelector('.product__img').src = product.foto;
  productElement.querySelector('.product__name').textContent = product.name;
  productElement.querySelector('.product__price').textContent = product.price.oldUan;
  return productElement;
};

// функция для удаления всех элементов из родителя
var clearElements = function () {
  console.log('clear')
  productsContainer.querySelectorAll('.product').forEach(function (element) {
    element.remove();
  });
};

 // функция для сортировки
 // sortByFeedbacks
 let showAscendingPrice = function (array) {
  // let arrayCopy = array.slice();
  let arrayCopy = JSON.parse(JSON.stringify(array));
  arrayCopy.sort(function (first, second) {
    return first.price.oldUan.trim().match(/\d+/) - second.price.oldUan.trim().match(/\d+/);
  });
  console.log(arrayCopy);
  renderArticles(arrayCopy);
};

let showDescendingPrice = function (array) {
  let arrayCopy = array.slice();
  arrayCopy.sort(function (first, second) {
    return second.price.oldUan.trim().match(/\d+/) - first.price.oldUan.trim().match(/\d+/);
  });
  console.log(arrayCopy);
  renderArticles(arrayCopy);
};

let sortByFeedbacks = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr));
  // temp.forEach(item => item.ratingReviews = +item.ratingReviews.replace(/\D/g, ''));
  temp.forEach(item => item.ratingReviews = Number.parseInt(item.ratingReviews));
  temp.sort((a, b) => a.ratingReviews - b.ratingReviews);
  renderArticles(temp);
}

let buttonToIncrease = document.querySelector('.sort__asc');
let buttonToDescend = document.querySelector('.sort__desc');
let buttonToRating = document.querySelector('.sort__rating');

buttonToIncrease.onclick = () => {
  clearElements();
  showAscendingPrice(articlesBlock);
}

buttonToDescend.onclick = () => {
  clearElements();
  showDescendingPrice(articlesBlock);
}

buttonToRating.onclick = () => {
  clearElements();
  sortByFeedbacks(articlesBlock);
}

export default showLoadSuccess;
