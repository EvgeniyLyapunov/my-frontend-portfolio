"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const closeElem = document.querySelector(".menu__close");

  const menuBlock = document.querySelector(".menu__block"),
        menuClose = document.querySelector(".menu__close"),
        menuCloseSvg = document.querySelector(".menu__close-svg"),
        menuLinks = document.querySelectorAll(".menu__link");
  
  hamburger.addEventListener("click", () => {
    humbureg();
  });
  
  closeElem.addEventListener("click", () => {
    humbureg();
  });
  
  function humbureg() {
    const viewHeight = document.documentElement.clientHeight;
    if(viewHeight <= 450) {
      menuBlock.classList.toggle("active-mobile-landscape__block");
      menuClose.classList.toggle("active-mobile-landscape__close");
      menuCloseSvg.classList.toggle("active-mobile-landscape__close-svg");
      menuLinks.forEach((item)=> {
        item.classList.toggle("active-mobile-landscape__link");
      });
      menu.classList.toggle("active");
    } else {
      menu.classList.toggle("active");
    }
  }

  const counters = document.querySelectorAll(".skills__count-point-value");
  const countView =document.querySelectorAll(".skills__count-view");
  
  counters.forEach((item, i) => {
    countView[i].style.width = item.innerHTML;
  });
});

