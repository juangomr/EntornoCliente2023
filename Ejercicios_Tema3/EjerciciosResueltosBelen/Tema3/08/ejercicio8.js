var cantidad = 5;

inicio = () => {
  document.getElementById("suma").addEventListener("click", calcular);
  document.getElementById("resta").addEventListener("click", calcular);
};

// Forma 1. Sin clase de estilo:
/*
calcular = (e) => {
  if (e.target.id == "suma") {
    cantidad++;
  } else if (e.target.id == "resta") {
    cantidad--;
  }
  if (cantidad == 3) {
    document.getElementById("resultado").innerHTML = "Hemos llegado al 3";
    document.getElementById("resultado").style.left = "50%";
    document.getElementById("resultado").style.top = "50%";
    document.getElementById("resultado").style.position = "absolute";
    document.getElementById("resultado").style.visibility = "visible";
  } else document.getElementById("resultado").style.visibility = "hidden";
};
*/

// Forma 2. Con clase de estilo
calcular = (e) => {
  if (e.target.id == "suma") {
    cantidad++;
  } else if (e.target.id == "resta") {
    cantidad--;
  }
  if (cantidad == 3) {
    document.getElementById("resultado").innerHTML = "Hemos llegado al 3";
    document.getElementById("resultado").className = "capa";
    document.getElementById("resultado").style.visibility = "visible";
  } else document.getElementById("resultado").style.visibility = "hidden";
};

window.addEventListener("DOMContentLoaded", inicio);
