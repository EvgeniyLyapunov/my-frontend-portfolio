const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__count-point-value");
const countView =document.querySelectorAll(".skills__count-view");

counters.forEach((item, i) => {
  countView[i].style.width = item.innerHTML;
});