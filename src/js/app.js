import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const menuBtn = document.querySelectorAll('.menu-open');
const headerBtn = document.querySelector('.header__button');
const menuList = document.querySelector('.header__menu');

menuBtn.forEach(el => {
  el.addEventListener('click', e => {
    menuList.classList.toggle('open');
    headerBtn.classList.toggle('open');
  })
})


if(document.getElementById('fraction')){
  const fraction = document.getElementById("fraction");
  const slides = document.querySelectorAll(".swiper-slide");
  const slideCount = slides.length;
  fraction.innerHTML = `<span>1</span> / ${slideCount}`;
}
new Swiper(".carousel__body", {
  slidesPerView: 1,
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    realIndexChange: (swiper) => {
      fraction.innerHTML = `<span>${swiper.realIndex + 1}</span> / ${slideCount}`;
    }
  }
});


document.querySelectorAll('.filter').forEach(el => {
  const open = el.querySelector('.filter__button');
  const close = el.querySelector('.filter__popup-button');
  const filter = el.querySelector('.filter__popup');
  open.addEventListener('click', el => {
    filter.classList.add('open');
    document.body.style.overflowY = "hidden"
  })
  close.addEventListener('click', el => {
    filter.classList.remove('open');
    document.body.style.overflowY = "auto"
  })
})

document.querySelectorAll('.requirements__item').forEach(el => {
  const btn = el.querySelector('.requirements__button-icon');
  const btnText = el.querySelector('.requirements__button p');
  const items = el.querySelectorAll('.requirements__row.toggle');
  btn.addEventListener('click', e => {
    btn.classList.toggle('active');
    items.forEach(item => {
      item.classList.toggle('toggled');
    })
    if(btn.classList.contains('active')){
      btnText.innerHTML = 'hide requirements';
    }else{
      btnText.innerHTML = 'See all requirements';
    }
  })
})