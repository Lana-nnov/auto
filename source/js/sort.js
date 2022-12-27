let similarProductTemplate = document.querySelector('#product')
      .content
      .querySelector('.product');

let productsContainer = document.querySelector('.products');

let articlesBlock = [];

let renderArticles = function (array) {
  console.log(array);
  articlesBlock = array;
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
 let showAscendingPrice = function (array) {
  let arrayCopy = array.slice();
  arrayCopy = arrayCopy.sort(function (first, second) {
    return first.price.oldUan.trim().match(/\d+/) - second.price.oldUan.trim().match(/\d+/);
  });
  console.log(arrayCopy);
  renderArticles(arrayCopy);
};

let showDescendingPrice = function (array) {
  let arrayCopy = array.slice();
  arrayCopy = arrayCopy.sort(function (first, second) {
    return second.price.oldUan.trim().match(/\d+/) - first.price.oldUan.trim().match(/\d+/);
  });
  console.log(arrayCopy);
  renderArticles(arrayCopy);
};

let buttonToIncrease = document.querySelector('.sort__asc');
let buttonToDescend = document.querySelector('.sort__desc');

buttonToIncrease.onclick = () => {
  clearElements();
  showAscendingPrice(articlesBlock);
}

buttonToDescend.onclick = () => {
  clearElements();
  showDescendingPrice(articlesBlock);
}

export default renderArticles;
