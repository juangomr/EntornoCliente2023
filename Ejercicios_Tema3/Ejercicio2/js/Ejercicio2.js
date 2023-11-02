var input, boton1, boton2, aud;

let funcion = () => {
  input.value = input.value.toUpperCase();
  input.select();
};

let empezarSonido = (e) => {
  e.preventDefault();
  aud.play();
};

let pausarSonido = (e) => {
  e.preventDefault();
  aud.pause();
};

let inicio = () => {
  input = document.getElementById("nombre");
  boton1 = document.getElementById("b1");
  boton2 = document.getElementById("b2");
  aud = document.getElementById("audio");
  input.addEventListener("blur", funcion);
  boton1.addEventListener("click", empezarSonido);
  boton2.addEventListener("click", pausarSonido);
};

window.addEventListener("DOMContentLoaded", inicio);
