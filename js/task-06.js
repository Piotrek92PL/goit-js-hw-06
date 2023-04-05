const validationInput = document.querySelector('#validation-input');

const validation = event => {
  const correctLength = Number(event.currentTarget.getAttribute('data-length'));
  let inputLength = event.currentTarget.value.length;
  if (inputLength !== correctLength) {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  } else {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  }
};

validationInput.addEventListener('blur', validation);
