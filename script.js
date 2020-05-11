const canvas = document.querySelector('.canvas');
const chosenColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

canvas.addEventListener('click', function(evt) {
  let clicked = evt.target;
  if (!eraser.checked) {
    clicked.style.backgroundColor = chosenColor.value;
  } else {
    clicked.style.backgroundColor = 'white';
  }
});

clearBtn.onclick = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
  	pixel.style.backgroundColor = 'white';
  });
};
