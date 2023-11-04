let formulario, boton, div, input;

let cambiaPosicionTexto = (e) => {
    e.preventDefault();
    div.innerHTML = input.value;
    input.value = "";
    input.focus();
    div.style.backgroundColor = "yellow";
    div.style.fontWeight = "bold";
}

let inicio = () => {
    formulario = document.getElementById("formulario");
    boton = document.getElementById("b1");
    div = document.getElementById("contenido");
    input = document.getElementById("texto");
    boton.addEventListener("click", cambiaPosicionTexto);
}

window.addEventListener("DOMContentLoaded", inicio);