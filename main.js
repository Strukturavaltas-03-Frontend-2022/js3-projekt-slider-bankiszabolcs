import photos from '/images.js';

const imgCounter = 3;
const numberOfImgs = photos.length;

const actualImg = document.querySelector('.image');
const leftArr = document.querySelector('.left-arrow');
const rightArr = document.querySelector('.right-arrow');
const buttons = document.querySelector('.buttons');
const caption = document.querySelector('.caption');
const counter = document.querySelector('.counter');

const loadImage = function (imgCounter) {
  actualImg.src = photos[imgCounter].url;
};

const changeCounter = function (numb) {
  counter.textContent = `${numb + 1} /  ${numberOfImgs}`;
};

const createButtons = function () {
  for (let i = 0; i < numberOfImgs; i++) {
    buttons.innerHTML += `<i data-counter="${i}" class="fa-solid fa-circle"></i>`;
  }
};

const makeButtonActive = function (numb) {
  const actualButton = (Array.from(buttons.childNodes).find((item) => item.dataset.counter === `${numb}`));
  actualButton.classList.add('button--active');
};

const modifyCaption = function () {
  caption.textContent = photos[imgCounter].description;
};

const stepLeft = function () {

};

const init = function () {
  changeCounter(imgCounter);
  createButtons();
  makeButtonActive(imgCounter);
  modifyCaption();
  loadImage(imgCounter)
};

init();
