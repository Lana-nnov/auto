let tree = document.querySelector('.tree');

let items = tree.querySelectorAll('li');

items.forEach(elem => {
  let span = document.createElement('span');
  elem.prepend(span);
  span.append(span.nextSibling);
  span.classList.add('show');
});

tree.onclick = (evt) => {
  console.log(evt.target);
  if(evt.target.tagName != 'SPAN') return;
  let childrenContainer = evt.target.parentNode.querySelector('ul');
  if(!childrenContainer) return;
  childrenContainer.hidden = !childrenContainer.hidden;

  if(childrenContainer.hidden) {
    evt.target.classList.add('hide');
    evt.target.classList.remove('show');
  } else {
    evt.target.classList.add('show');
    evt.target.classList.remove('hide');
  }
}
