let eNombre, eApellidos, boton, nombre, apellidos;

let validar = (e) => {
  e.preventDefault();
  var arrayApellidos = apellidos.value.split(" ");
  var nombreOk = false;
  var apellidoOk = false;
  if (
    nombre.value.startsWith("a") ||
    nombre.value.startsWith("e") ||
    nombre.value.startsWith("i") ||
    nombre.value.startsWith("o") ||
    (nombre.value.startsWith("u") && !nombre.value.startsWith(""))
  ) {
    eNombre.innerHTML = "";
    nombreOk = true;
  } else {
    eNombre.style.color = "red";
    eNombre.innerHTML = "El nombre no empieza por vocal o está vacío";
  }
  if (arrayApellidos.length > 2 || arrayApellidos.isEmpty()) {
    eApellidos.style.color = "red";
    eApellidos.innerHTML = "El apellido es mayor de 2 palabras o está vacío";
  } else {
    eApellidos.innerHTML = "";
    apellidoOk = true;
  }

  if (nombreOk && apellidoOk) {
    location.href = "https://ceu.es";
  }
};

let inicio = () => {
  nombre = document.getElementById("nombre");
  apellidos = document.getElementById("apellidos");
  boton = document.getElementById("validar");
  eApellidos = document.getElementById("eApellidos");
  eNombre = document.getElementById("eNombre");
  boton.addEventListener("click", validar);
};

window.addEventListener("DOMContentLoaded", inicio);
