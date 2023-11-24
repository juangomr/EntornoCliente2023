let boton, mensaje, botonHorno, temporizador, audio, botonPasos;

var receta = {
  nombre: "Pollo",
  ingredientes: ["ingrediente1", "ingrediente2", "ingrediente3"],
  pasos: ["paso1", "paso2", "paso3"],
};
let mostrarIngredientes = () => {
  let elementoUl = document.createElement("ul");

  for (let index = 0; index < receta.ingredientes.length; index++) {
    elementoUl.innerHTML += "<li>" + receta.ingredientes[index] + "</li>";
  }
  mensaje.appendChild(elementoUl);
};

let mostrarAudio = () => {
  temporizador = setInterval(tiempoRestante, 1000);
};
var contador = 10;
let tiempoRestante = () => {
  if (contador >= 0) {
    mensaje.innerHTML = "Tiempo restante: " + contador--;
  } else if (contador <= 5 && contador >= 0) {
    audio.play();
  } else {
    clearInterval(temporizador);
    audio.pause();
    alert("Saca la tarta del horno");
  }
};

let mostrarPasos = () => {
  let tabla = document.createElement("table");

  for (let i = 0; i < receta.pasos.length; i++) {
    var tr = document.createElement("tr");
    tr.innerHTML += "<td>" + receta.pasos[i] + "</td>";
    tr.innerHTML += "<td><input type=checkbox></td>";
    tabla.appendChild(tr);
  }
  mensaje.appendChild(tabla);
  tabla.style.border = "1px solid black";
  tabla.style.borderColor = "green";
  tabla.style.borderCollapse = "collapse";
  tr.style.borderCollapse = "collapse";
};

let inicio = () => {
  boton = document.getElementById("ingredientes");
  botonHorno = document.getElementById("horno");
  boton.addEventListener("click", mostrarIngredientes);
  botonHorno.addEventListener("click", mostrarAudio);
  botonPasos = document.getElementById("pasos");
  botonPasos.addEventListener("click", mostrarPasos);
  audio = document.getElementById("myAudio");
  mensaje = document.getElementById("resultadoDiv");
};

window.addEventListener("DOMContentLoaded", inicio);
