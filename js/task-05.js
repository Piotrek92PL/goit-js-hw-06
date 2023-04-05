const form = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

form.addEventListener('input', event => {
  event.preventDefault();
  if (event.currentTarget.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
