(function () {
  var favBtns = document.querySelectorAll('.favorite');
  if (favBtns.length) {
  favBtns.forEach (function(elem) {
    elem.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.target.classList.toggle('favorite--active');
    });
  });
  }
  /*favBtns.addEventListener('click', function() {
    console.log(22);
  })*/

})();
