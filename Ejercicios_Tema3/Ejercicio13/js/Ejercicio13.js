let nombre, apellidos, edad, boton, provincias, error;

let inicio = () => {
  formulario = document.getElementById("formulario");
  nombre = document.getElementById("nombre");
  apellidos = document.getElementById("apellidos");
  edad = document.getElementById("edad");
  provincias = document.getElementById("provincias");
  error = document.getElementById("resultado");
  boton = document.getElementById("enviar");
  boton.addEventListener("click", validarDatos);
};
let validarDatos = (e) => {
  e.preventDefault();
  let seleccionOk = false;
  let inputOk = false;

  if (
    nombre.value != "" &&
    apellidos.value != "" &&
    edad.value >= 0 &&
    edad.value <= 105
  ) {
    inputOk = true;
  }

  if (inputOk == false) {
    e.preventDefault();
    error.innerHTML = "Los datos introducidos son incorrectos";
  } else {
    error.innerHTML = "";
    formulario.submit();
  }
};

window.addEventListener("click", inicio);
