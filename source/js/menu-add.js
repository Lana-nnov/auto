let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body2 = document.querySelector('body');

let menuAdd = document.querySelector('.nav-menu');

if(isMobile.any()) {
  body2.classList.add('touch');
  let arrows = document.querySelectorAll('.arrow');
  arrows.forEach(elem => {
    let thisLink = elem.previousElementSibling;
    console.log(thisLink)
    let subMenu = elem.nextElementSibling;
    elem.addEventListener('click', (evt) => {
      console.log('CLICK');
      evt.target.classList.toggle('arrow--active');
      subMenu.classList.toggle('open');
    })
  })

  /*menuAdd.addEventListener('click', (evt) => {
    console.log(evt.target);
    if(evt.target.tagName != 'SPAN' & evt.target.tagName != 'A') return;
    let subMenu= evt.target.nextElementSibling;
    console.log(subMenu);
    subMenu.classList.toggle('open');
    evt.target.classList.add('active');
  })*/
} else {
  body2.classList.add('mouse');
}


