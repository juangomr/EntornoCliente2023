let mensaje = "";

inicio = () => {
  document.getElementById("enviar").addEventListener("click", validar);
};

validar = (e) => {
  if (
    validarNombre() &&
    validarApellido() &&
    validarEdad() &&
    validarProvincia() &&
    confirm("¿Deseas enviar el formulario?")
  )
    return true;
  else {
    // Cancelamos el evento de envío por defecto asignado al boton de submit

    e.preventDefault();
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.color = "red";
    return false; // Salimos de la función devolviendo false.
  }
};

validarNombre = () => {
  const $nombre = document.getElementById("nombre");
  if ($nombre.value == "") {
    $nombre.focus();
    mensaje = "El nombre no puede estar vacío";
    return false;
  } else return true;
};

validarApellido = () => {
  const $ape = document.getElementById("apellidos");
  if ($ape.value == "") {
    $ape.focus();
    mensaje = "El apellido no puede estar vacío";
    return false;
  } else return true;
};

validarEdad = () => {
  const $edad = document.getElementById("edad");
  if (
    isNaN($edad.value) ||
    $edad.value == "" ||
    $edad.value < 0 ||
    $edad.value > 105
  ) {
    $edad.focus();
    mensaje = "Edad incorrecta, debe estar comprendida entre 0 y 105";
    return false;
  } else return true;
};

validarProvincia = () => {
  // Comprueba que la opción seleccionada sea diferente a 0.
  // Si es la 0 es que no ha seleccionado ningún nombre de Provincia.
  if (document.getElementById("provincia").selectedIndex == 0) {
    mensaje = " Debes seleccionar una provincia.";
    // Situamos el foco en el campo provincia y le asignamos la clase error.
    document.getElementById("provincia").focus();
    return false;
  } else return true;
};

window.addEventListener("DOMContentLoaded", inicio);
