
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textusuario = document.getElementById("textUsuario");
let textPassword = document.getElementById("textPassword");
let recuperarsenha = document.querySelector("recuperarsenha");
let textRecuperar = document.getElementById("textRecuperar");




form.addEventListener("submit", (e) => {
  if (usuario.value == "" && password.value == "") {
    textForm.textContent = "Você precisa preencher todos os campos!";
  } else if (
    validatorUsuario(usuario.value) === true &&
    validatorPassword(password.value) === true
  ) {
    console.log(usuario.value);
    console.log(password.value);
    textForm.textContent = "";
    textusuario.textContent = "";
    textPassword.textContent = "";
  } else {
    console.log("Requisição não atendida");
  }


  e.preventDefault();
});

usuario.addEventListener("keyup", () => {
  if (validatorUsuario(usuario.value) !== true) {
    textusuario.textContent = "O formato do usuario deve ser Ex: name@abc.com";
  } else {
    textusuario.textContent = "";
  }
});

password.addEventListener("keyup", () => {
  if (validatorPassword(password.value) !== true) {
    textPassword.textContent =
      "O formato da senha deve ser no min 6 caracteres";
  } else {
    textPassword.textContent = "";
  }
});

function validatorUsuario(usuario) {
  let usuarioPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return usuarioPattern.test(usuario);
}

function validatorPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}




  





