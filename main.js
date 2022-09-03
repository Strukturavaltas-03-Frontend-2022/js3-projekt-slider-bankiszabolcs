import photos from '/images.js';

let imgCounter = 3;
const numberOfImgs = photos.length;

const actualImg = document.querySelector('.image');
const leftArr = document.querySelector('.left-arrow');
const rightArr = document.querySelector('.right-arrow');
const buttons = document.querySelector('.buttons');
const caption = document.querySelector('.caption');
const counter = document.querySelector('.counter');
const container = document.querySelector('.container');

const loadImage = function () {
  actualImg.src = photos[imgCounter].url;
  actualImg.alt = photos[imgCounter].description;
  actualImg.classList.add('fade');
  actualImg.addEventListener('animationend', () => {
    actualImg.classList.remove('fade');
  });
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
  const buttonArr = Array.from(buttons.childNodes);
  const actualButton = buttonArr.find((item) => item.dataset.counter === `${numb}`);
  buttonArr.map((item) => item.classList.remove('button--active'));
  actualButton.classList.add('button--active');
};

const modifyCaption = function () {
  caption.textContent = photos[imgCounter].description;
};

const toStep = function () {
  loadImage(imgCounter);
  modifyCaption();
  makeButtonActive(imgCounter);
  changeCounter(imgCounter);
};

const stepLeft = function () {
  if (imgCounter < 1) {
    imgCounter = numberOfImgs - 1;
    toStep();
  } else if (imgCounter > 0) {
    imgCounter -= 1;
    toStep();
  }
};

const stepRight = function () {
  if (imgCounter > 5) {
    imgCounter = 0;
    toStep();
  } else if (imgCounter < 7) {
    imgCounter += 1;
    toStep();
  }
};

const makeLeftArrow = function () {
  leftArr.addEventListener('click', stepLeft);
};

const makeRighttArrow = function () {
  rightArr.addEventListener('click', stepRight);
};

const makeButtonsWork = function () {
  buttons.addEventListener('click', (e) => {
    const actualEl = e.target;
    if (actualEl.tagName === 'I') {
      imgCounter = Number(actualEl.dataset.counter);
      toStep();
    }
  });
};

const init = function () {
  changeCounter(imgCounter);
  createButtons();
  makeButtonActive(imgCounter);
  modifyCaption();
  loadImage(imgCounter);
  makeLeftArrow();
  makeRighttArrow();
  makeButtonsWork();
};

function slider(sec) {
  setInterval(stepRight, sec * 1000);
}

const adjustHeight = function (pixel) {
  console.log(`"${pixel}px"`);
  container.setAttribute('style', `height:${pixel}px`);
};

// -----------MODIFIERs------------
// slider(2);
// adjustHeight(500);

init();
