const sizeBar = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

sizeBar.addEventListener('input', event => {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
});
