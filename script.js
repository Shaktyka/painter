const canvas = document.querySelector('.canvas');
const chosenColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

const HORIZ_AMOUNT = 20;
const VERT_AMOUNT = 19;

// Раскрашивание холста и ластик
canvas.addEventListener(`click`, (evt) => {
  let clicked = evt.target;
  if (!eraser.checked) {
    clicked.style.backgroundColor = chosenColor.value;
  } else {
    clicked.style.backgroundColor = `white`;
  }
});

// Полная очистка холста
clearBtn.onclick = () => {
  const pixels = document.querySelectorAll(`.pixel`);
  pixels.forEach((pixel) => {
  	pixel.style.backgroundColor = `white`;
  });
};

// Генерирует канвас
const initCanvas = (cellAmount) => {
  const fragment = new DocumentFragment();
  for (let i = 0; i < cellAmount; i++) {
  	const div = document.createElement(`div`);
  	div.className = `pixel`;
    fragment.append(div);
  }
  canvas.append(fragment);
};

initCanvas(HORIZ_AMOUNT * VERT_AMOUNT);
