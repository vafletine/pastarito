const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-list');

burger.addEventListener("click", () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll')
});

