const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password0 = document.getElementById('password0');
const password1 = document.getElementById('password1');
const allInputs = Array.from(document.getElementsByTagName('input'));

const getParentInput = function (e) {
  parentElement = e.target.parentElement;
  return parentElement;
};

const displayMessage = function (input, message) {
  const form = input.parentElement;
  const smallElement = form.querySelector('small');
  smallElement.textContent = message;
};

userName.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const usernameValue = userName.value.trim();
  if (usernameValue !== '' && usernameValue.length > 5) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(userName, 'Enter more than 5 characters.');
  }
});

email.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const emailValue = email.value.trim();
  if (
    emailValue.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(email, 'Enter a valid email address.');
  }
});

country.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const countryValue = country.value.trim();
  if (countryValue.match(/^[A-Za-z]+$/) && countryValue.length >= 4) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(country, 'Enter a valid country name.');
  }
});

zipCode.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const zipCodeValue = zipCode.value.trim();
  if (zipCodeValue.match(/^\d+$/) && zipCodeValue.length === 5) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(zipCode, 'Enter a valid zip code.');
  }
});

password0.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const password0Value = password0.value;
  if (
    password0Value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    )
  ) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(password0, 'Enter a valid password');
  }
});

password1.addEventListener('input', (e) => {
  const inputContainer = getParentInput(e);
  const password1Value = password1.value;
  if (password1Value === password0.value) {
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
  } else {
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
    displayMessage(password1, "Password doesn't match");
  }
});
