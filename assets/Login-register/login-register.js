// Validacion de formularios
// form
const form = document.querySelector(".form");
// padre de los input
const formInput = document.querySelector(".form__input");
// Input del email
const inputEmail = document.querySelector(".form__input--email");
// Input de la contraseña
const inputPassword = document.querySelector(".form__input--password");

// check del email
const checkEmail = () => {
  let valid = false;

  const emailValue = inputEmail.value.trim();
  if (isEmpty(emailValue)) {
    showError(inputEmail, "Este campo es obligatorio");
  } else if (!isValidEmail(emailValue)) {
    showError(inputEmail, "Ingrese un email valido");
  } else {
    showSuccess(inputEmail);
    valid = true;
  }
  return valid;
};

// check de la contraseña
const checkPassword = () => {
  let valid = false;

  const passValue = inputPassword.value.trim();

  if (isEmpty(passValue)) {
    showError(inputPassword, "Este campo es obligatorio");
  } else if (!isSecurePassword(passValue)) {
    showError(
      inputPassword,
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minuscula y un simbolo"
    );
  } else {
    showSuccess(inputPassword);
    valid = true;
  }

  return valid;
};

// si esta vacio:
const isEmpty = (value) => value === "";

// si es valido el email
const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// si es segura la contraseña
const isSecurePassword = (pass) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(pass);
};

// funcion de error a mostrar en los formularios
showError = (input, message) => {
  const saveInput = input.parentElement;
  saveInput.classList.add("error");
  saveInput.classList.remove("success");

  const mensajeError = saveInput.querySelector("small");

  mensajeError.textContent = message;
};

// funcion de valido a mostrar en los formularios
showSuccess = (input) => {
  const saveInput = input.parentElement;
  saveInput.classList.remove("error");
  saveInput.classList.add("success");

  const mensajeError = saveInput.querySelector("small");

  mensajeError.textContent = "";
};

// debounce

const debounce = (fn, delay = 900) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

// la logica para arrastrar las imagenes una a una
let counter = 2;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 1500);
