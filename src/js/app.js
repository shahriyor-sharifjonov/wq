import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menuBtn = document.querySelectorAll('.menu-open');
const headerBtn = document.querySelector('.header__button');
const menuList = document.querySelector('.header__menu');

menuBtn.forEach(el => {
  el.addEventListener('click', e => {
    menuList.classList.toggle('open');
    headerBtn.classList.toggle('open');
  })
})