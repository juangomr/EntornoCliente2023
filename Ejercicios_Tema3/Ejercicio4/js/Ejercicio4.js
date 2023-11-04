let provincias, boton, provinciasMultiple, boton2;

let validar = (e) => {
  e.preventDefault();
  alert("valor de la provincia seleccionada: " + provincias[provincias.selectedIndex].value +
    " descripción: " + provincias[provincias.selectedIndex].text);
}

let validar2 = (e) => {
  e.preventDefault();
  let opcionesSeleccionadas = Array.from(provinciasMultiple.selectedOptions);
  for (let index = 0; index < opcionesSeleccionadas.length; index++) {

    alert("valor de la provincia seleccionada: " + opcionesSeleccionadas[index].value + " descripción: " + opcionesSeleccionadas[index].value);
  }
}
let inicio = () => {
  provincias = document.getElementById("provincias");
  boton = document.getElementById("b1");
  provinciasMultiple = document.getElementById("provinciasMultiple");
  boton2 = document.getElementById("b2");
  boton.addEventListener("click", validar);
  boton2.addEventListener("click", validar2);

}

window.addEventListener("DOMContentLoaded", inicio);
