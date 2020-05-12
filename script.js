const canvas = document.querySelector('.canvas');
const chosenColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

const HORIZ_AMOUNT = 20;
const VERT_AMOUNT = 19;

// Добавляет сброс выбранного состояния ластика
chosenColor.onclick = () => {
  if (eraser.checked) {
  	document.querySelector(`.eraser`).checked = false;
  }
};

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
  document.querySelector(`.eraser`).checked = false;
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

/*
Новые фичи:
- генерация поля по введённым игроком значениям
- динамический размер холста (автоматическая подстройка под генерируемую сетку)
- возможность менять размер ячеек (ползунком)
- сохранение картинки в localStorage
- загрузка сохранённой картинки из localStorage
- смена котика при нажатии
 */
