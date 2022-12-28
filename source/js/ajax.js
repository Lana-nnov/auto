import showLoadSuccess from './sort.js';

const clickMeButton = document.querySelector('.click-me')
const getTasksButton = document.querySelector('.get-tasks')
const deleteTasksButton = document.querySelector('.delete-tasks')
const pageNumber = document.querySelector("#page-number");

/*clickMeButton.addEventListener('click', () => {
  getInfo(onDataReceived);
})*/

clickMeButton.addEventListener('click', () => {
  const promise = getInfo2();
  promise.then(onDataReceived);
})

getTasksButton.addEventListener('click', () => {
  const promise = getTasks(pageNumber.value);
  promise.then(onTasksReceived);
})

deleteTasksButton.addEventListener('click', () => {
  console.log('deleted');
  const promise = deleteTask(1);
  return promise.then((data) => data.data);
})

function getTasks(pageNumber) {
  const promise = axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${pageNumber}`);
  return promise.then((data) => data.data);
}

function getInfo2() {
  const promise = axios.get('https://jsonplaceholder.typicode.com/photos');
  return promise.then((data) => data.data);
  //return data - для jquery
}

function createTask(title) {
  const promise = axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: title,
    id: 222
  });
  return promise.then((data) => data.data);
}

function getCities() {
  const promise = axios.post('https://studika.ru/api/areas');
  return promise.then((data) => data.data);
}

function updateTask(title) {
  const promise = axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: title,
    id: 222
  });
  return promise.then((data) => data.data);
}

function deleteTask(id) {
  const promise = axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return promise.then((data) => data.data);
}

function getInfo(successCallback) {
  const promise = $.ajax('https://jsonplaceholder.typicode.com/photos', {
    success: function(data) {
      successCallback(data);
    }
    /*success: function(data) {
      console.log('YESSS')
      console.log(data[0]);
      data = data.slice(0, 5)
      data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnailUrl;
        console.log(img);
        document.querySelector('body').appendChild(img);
      });
    }*/
  })
  return promise
};

function onDataReceived(data) {
  data = data.slice(0, 5) // data = data.slice(0, 5) для jqery
  data.forEach(el => {
    const img = document.createElement('img');
    img.src = el.thumbnailUrl;
    document.querySelector('body').appendChild(img);
  });
}

function onTasksReceived(tasks) {
  console.log(tasks)
  const tasksList = document.querySelector('.tasks__list');
  tasksList.innerHTML = '----';
  tasks.forEach (task => {
    const li = document.createElement('li');
    li.innerHTML = task.title;
    li.dataset.id = task.id;
    tasksList.appendChild(li);
  })
}

createTask('learn Js').then(data => console.log(data));

// ПОИСК
getCities().then(onCitiesRecieved);

function onCitiesRecieved(cities) {
  console.log(cities);
  cities.forEach(city => {
    const li = document.createElement('li');
    li.innerHTML = city.name;
    document.querySelector('.elastic').appendChild(li);
  })
}

document.querySelector('#elastic').oninput = function() {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.elastic li');
  if (val !== '') {
    elasticItems.forEach(elem => {
       if(elem.innerText.toLowerCase().search(val) == -1) {
        console.log(elem)
        elem.classList.add('visually-hidden');
        elem.innerHTML = elem.innerText;
       } else {
        elem.classList.remove('visually-hidden');
        let str = elem.innerText;
        let pos = elem.innerText.toLowerCase().search(val);
        elem.innerHTML = insertMark(str, pos, val.length)
       }
      }
    )
  } else {
    elasticItems.forEach(elem => {
      elem.classList.remove('visually-hidden');
      elem.innerHTML = elem.innerText;
    })
  }
}

function insertMark (str, pos, len) {
   return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len)
}

/*FETCH*/

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {
  return fetch(url).then(response => response.json());
}

function createRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if(response.ok) {
      return response.json()
    }
    return response.json().then(error => {
      const e = new Error('что-то пошло не так');
      e.data = error;
      throw e;
    });
  });
}

const body = {
  name: 'Vladilen',
  age: 33
}

sendRequest('GET', requestURL).then(data => console.log(data)).catch(err => console.log(err));

createRequest('POST', requestURL, body).then(data => console.log(data)).catch(err => console.log(err));

fetch(requestURL).then(data => console.log(data));

/*Делегирование события*/
const tasksList = document.querySelector('.tasks__list');

tasksList.addEventListener('click', (event) => {
  const li = event.target;
  if (li.nodeName != 'LI') return;
  console.log(li);
  /*if (li.getAttribute('data-id') === '3') {
    li.classList.add('bg-pink');
  } else {}*/
  li.classList.add('bg-pink');
})

/*function onProductRecieved(products) {
  console.log(products);
  articlesBlock = products;
  products.forEach(product => {
    const article = document.createElement('article');
    article.innerHTML = product.name;
    document.querySelector('.sort__items').appendChild(article);
  })
};*/

fetch('http://localhost:3000/products').then(response => response.json()).then(showLoadSuccess);



