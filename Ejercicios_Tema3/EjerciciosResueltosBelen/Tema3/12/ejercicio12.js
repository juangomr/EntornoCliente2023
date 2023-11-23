inicio = () => {
  document.getElementById("boton").addEventListener("click", validar);
};

validar = () => {
  if (validarNombre() && validarApellidos()) {
    document.forms[0].action = "http://ceu.es";
    document.forms[0].submit();
  } else {
  }
};

validarNombre = () => {
  let v_nombre = document.getElementById("nombre").value;
  v_letra = v_nombre.toUpperCase().substring(0, 1);

  if (
    v_letra == "A" ||
    v_letra == "E" ||
    v_letra == "I" ||
    v_letra == "O" ||
    v_letra == "U"
  ) {
    return true;
  } else {
    document.getElementById("resultado1").innerHTML =
      "El nombre no comienza por vocal";
    document.getElementById("resultado1").style.color = "red";
    return false;
  }
};

validarApellidos = () => {
  let v_apellidos = document.getElementById("apellidos").value;

  let palabras = v_apellidos.split(" ");
  if (palabras.length > 2) {
    document.getElementById("resultado2").innerHTML =
      "Los apellidos tienen más de dos palabras";
    document.getElementById("resultado2").style.color = "red";
    return false;
  } else {
    return true;
  }
};

window.addEventListener("DOMContentLoaded", inicio);
