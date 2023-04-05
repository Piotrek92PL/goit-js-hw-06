const form = document.querySelector('.login-form');

const submitEvent = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Wszystkie pola muszą być uzupełnione!');
  } else {
    console.log({ email: `${email.value}`, password: `${password.value}` });
    event.currentTarget.reset();
  }
};
form.addEventListener('submit', submitEvent);
