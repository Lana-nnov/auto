'use strict';

(function () {
  var footerToggles = document.querySelectorAll('.page-footer__accordeon-container button');
  var pageFooterSections = document.querySelectorAll('.page-footer__sections div');

  footerToggles.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      if(e.target.closest('.page-footer__accordeon-container').parentElement.classList.contains('page-footer__accordeon--opened')) {
        e.target.closest('.page-footer__accordeon-container').parentElement.classList.remove('page-footer__accordeon--opened');
      } else {
        pageFooterSections.forEach(function(elem) {
          elem.classList.remove('page-footer__accordeon--opened');
        });
        e.target.closest('.page-footer__accordeon-container').parentElement.classList.add('page-footer__accordeon--opened');
      }

    });
  })

  /* в этой версии не закрываются уже открытые блоки

  footerToggles.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      console.log(e.target.closest('.page-footer__accordeon-container').parentElement);
      e.target.closest('.page-footer__accordeon-container').parentElement.classList.toggle('page-footer__accordeon--opened');
    });
  })*/
})();
