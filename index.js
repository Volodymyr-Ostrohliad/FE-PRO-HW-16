"use strict";

const images = ['image-01.jpg', 'image-02.jpg', 'image-03.jpg'];

const div = document.createElement('div');
div.classList.add('div');
document.body.appendChild(div);

let imageIndex = 0;
const img = document.createElement('img');
img.classList.add('img');
img.src = `./images/${images[imageIndex]}`;
div.appendChild(img);

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
div.appendChild(btnContainer);

const btnPrev = document.createElement('button');
btnPrev.classList.add('btn', 'btn__prev');
btnPrev.textContent = 'PREV';
btnContainer.appendChild(btnPrev);

const btnNext = document.createElement('button');
btnNext.classList.add('btn', 'btn__next');
btnNext.textContent = 'NEXT';
btnContainer.appendChild(btnNext);

btnPrev.addEventListener('click', showPrev);
btnNext.addEventListener('click', showNext);

function showPrev() {
  if (imageIndex > 0) {
    imageIndex--;
    img.src = `./images/${images[imageIndex]}`;
  }
  update();
}

function showNext() {
  if (imageIndex < images.length - 1) {
    imageIndex++;
    img.src = `./images/${images[imageIndex]}`;
  }
  update();
}

function update() {
  btnPrev.style.display = imageIndex === 0 ? 'none' : 'block';
  btnNext.style.display = imageIndex === images.length - 1 ? 'none' : 'block';
}
update();
