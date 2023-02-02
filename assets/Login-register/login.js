// el escuchador del submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEmailValidLogin = checkEmail();
  let isPasswordValidLogin = checkPassword();
  let isFormValidLogin = isEmailValidLogin & isPasswordValidLogin;
  if (isFormValidLogin) {
    form.submit();
  }
});

// el escuchador del input para el debounce

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id) {
      case "email":
        checkEmail();
        break;

      case "password":
        checkPassword();
        break;
    }
  })
);
