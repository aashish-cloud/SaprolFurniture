// carousel

new Glide('.glide', {
  type: 'carousel'
}).mount();

// hamburger-menu

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-right');

function menuContent() {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
  close.classList.toggle('show');
}

hamburger.addEventListener('click', menuContent);
close.addEventListener('click', menuContent);
