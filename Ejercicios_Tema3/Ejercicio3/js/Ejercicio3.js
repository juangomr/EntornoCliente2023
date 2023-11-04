let checkbox, botonValidar, formulario, botonMarcar, botonDesmarcar;

let validar = (e) => {
  e.preventDefault();
  let contador = 0;

  for (let index = 0; index < formulario.elements.length; index++) {
    if (formulario.elements[index].checked && formulario.elements[index].checked) {
      contador++;
    }
  }
  alert("Checkbox seleccionados: " + contador);
};

let marcar = (e) => {
  e.preventDefault();
  checkbox.checked = true;
}

let desmarcar = (e) => {
  e.preventDefault();
  checkbox.checked = false;
}

let inicio = () => {
  botonValidar = document.getElementById("b1");
  formulario = document.getElementById("f");
  botonMarcar = document.getElementById("marcar");
  botonDesmarcar = document.getElementById("desmarcar");
  checkbox = document.getElementById("c");
  botonValidar.addEventListener("click", validar);
  botonMarcar.addEventListener("click", marcar);
  botonDesmarcar.addEventListener("click", desmarcar);
};

window.addEventListener("DOMContentLoaded", inicio);
