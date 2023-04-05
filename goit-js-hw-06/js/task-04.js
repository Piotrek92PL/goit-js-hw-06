let counterValue = 0;
const value = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

const increase = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrease = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementButton.addEventListener('click', increase);
decrementButton.addEventListener('click', decrease);
