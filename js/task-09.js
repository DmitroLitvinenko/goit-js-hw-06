function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onAddStyleBodyColor);

function onAddStyleBodyColor () {
  const body = document.querySelector('body')
  body.style.backgroundColor = getRandomHexColor();

  const colorValue = document.querySelector('.color')
  colorValue.textContent = body.style.backgroundColor;
};