inicio = () => {
  document.getElementById("boton").addEventListener("click", validar);
};

validar = () => {
  let v_nombre = document.getElementById("nombre").value;
  let v_apellidos = document.getElementById("apellidos").value;

  v_letra = v_nombre.toUpperCase().substring(0, 1);

  if (
    v_letra == "A" ||
    v_letra == "E" ||
    v_letra == "I" ||
    v_letra == "O" ||
    v_letra == "U"
  ) {
    document.getElementById("resultado1").innerHTML = "";
  } else {
    document.getElementById("resultado1").innerHTML =
      "El nombre no comienza por vocal";
    document.getElementById("resultado1").style.color = "red";
  }

  let palabras = v_apellidos.split(" ");
  if (palabras.length > 2) {
    document.getElementById("resultado2").innerHTML =
      "Los apellidos tienen más de dos palabras";
    document.getElementById("resultado2").style.color = "red";
  } else {
    document.getElementById("resultado2").innerHTML = "";
  }
};
window.addEventListener("DOMContentLoaded", inicio);
