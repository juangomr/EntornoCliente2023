let mensaje = "";
let boton;

let validar = (e) => {
  e.preventDefault();

  if (
    validarUsuario() &&
    validarClave() &&
    validarCodigo() &&
    validarProvincia()
  ) {
    window.location.href = "formulario.html";
  } else {
    e.preventDefault();
  }
};

let validarUsuario = (e) => {
  const usuario = document.getElementById("usuario");
  if (usuario.value == "") {
    mensaje.innerHTML = "El campo usuario es obligatorio";
    return false;
  } else {
    return true;
  }
};

let validarClave = (e) => {
  const clave = document.getElementById("clave").value;

  if (clave == "") {
    mensaje.innerHTML = "El campo contraseña es obligatorio";
    return false;
  } else if (clave.length < 8) {
    mensaje.innerHTML = "El campo contraseña tiene como mínimo 8 caracteres";
    return false;
  } else if (isNaN(clave.substr(clave.length, clave.length))) {
    mensaje.innerHTML =
      "El campo contraseña tiene que tener como último carácter un número";
    return false;
  } else {
    return true;
  }
};

let validarProvincia = (e) => {
  const provincia = document.getElementById("provincia");

  if (provincia.selectedIndex == "0") {
    mensaje.innerHTML = "El campo provincia es obligatorio";
    return false;
  } else {
    return true;
  }
};

let validarCodigo = (e) => {
  const codigoPostal = document.getElementById("cpostal").value;

  if (codigoPostal == "") {
    mensaje.innerHTML = "El campo código postal es obligatorio";
    return false;
  } else if (isNaN(codigoPostal)) {
    mensaje.innerHTML = "El campo código postal tiene que ser un número";
    return false;
  } else if (codigoPostal.length == 5) {
    mensaje.innerHTML = "El campo código postal tiene que tener 5 números";
    return false;
  } else if (codigoPostal.substr(0, 2) == provincia.selectedIndex.value) {
    mensaje.innerHTML =
      "El campo código postal tiene que coincidir con la opción de provincia seleccionada";
    return false;
  }
  return true;
};

let inicio = () => {
  boton = document.getElementById("b1");
  boton.addEventListener("click", validar);
  mensaje = document.getElementById("mensajeError");
};
window.addEventListener("DOMContentLoaded", inicio);
