// Input de nombre
const inputName = document.querySelector(".form__input--name");

// check del username
const checkUsername = () => {
  let valid = false;

  const usernameValue = inputName.value.trim();
  if (isEmpty(usernameValue)) {
    showError(inputName, "Este campo es obligatorio");
  } else {
    showSuccess(inputName);
    valid = true;
  }
  return valid;
};

// el escuchador del submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUsernameValid = checkUsername();
  let isEmailValidLogin = checkEmail();
  let isPasswordValidLogin = checkPassword();
  let isFormValidRegister =
    isEmailValidLogin & isUsernameValid & isPasswordValidLogin;
  if (isFormValidRegister) {
    form.submit();
  }
});

// escuchador del debounce
form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id) {
      case "name":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;

      case "password":
        checkPassword();
        break;
    }
  })
);
