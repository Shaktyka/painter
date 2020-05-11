const canvas = document.querySelector('.canvas');
const chosenColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');

canvas.addEventListener('click', function(evt) {
  let clicked = evt.target;
  if (!eraser.checked) {
    clicked.style.backgroundColor = chosenColor.value;
  } else {
    clicked.style.backgroundColor = 'white';
  }
});
