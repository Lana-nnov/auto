const clickMeButton = document.querySelector('.click-me')

/*clickMeButton.addEventListener('click', () => {
  getInfo(onDataReceived);
})*/

clickMeButton.addEventListener('click', () => {
  const promise = getInfo2();
  promise.then(onDataReceived);
})

function getInfo2() {
  const promise = axios.get('https://jsonplaceholder.typicode.com/photos');
  return promise.then((data) => data.data);
  //return data - для jquery
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

// getInfo();
