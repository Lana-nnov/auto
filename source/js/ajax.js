const clickMeButton = document.querySelector('.click-me')
const getTasksButton = document.querySelector('.get-tasks')

/*clickMeButton.addEventListener('click', () => {
  getInfo(onDataReceived);
})*/

clickMeButton.addEventListener('click', () => {
  const promise = getInfo2();
  promise.then(onDataReceived);
})

getTasksButton.addEventListener('click', () => {
  const promise = getTasks(101);
  promise.then(onTasksReceived);
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
  tasks.forEach (task => {
    const li = document.createElement('li');
    li.innerHTML = task.title;
    document.querySelector('.tasks').appendChild(li);
  })
}

createTask('learn Js').then(data => console.log(data));

// getInfo();
