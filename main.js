const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.nav-ul');
const menuRow = document.querySelector('.nav-row');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hamClosed')
  menu.classList.add('open');
  cross.classList.add('crossOpen');
  menuRow.classList.add('navRowOpen');
  menuOpen = true;
})

cross.addEventListener('click', () => {
  hamburger.classList.remove('hamClosed')
  menu.classList.remove('open');
  cross.classList.remove('crossOpen');
  menuRow.classList.remove('navRowOpen');
  menuOpen = false;
})