function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const body = document.querySelector('body');
const hexColor = document.querySelector('.color');

const changOfColor = () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  hexColor.textContent = randomColor;
};

changeColorButton.addEventListener('click', changOfColor);
