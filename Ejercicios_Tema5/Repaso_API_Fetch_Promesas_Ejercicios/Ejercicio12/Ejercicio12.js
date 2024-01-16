let contenedor, carga, fotos, temporizador;

let inicio = () => {
  contenedor = document.getElementById("contenido");
  carga = 0;
  cargarFotos();
};

let mezclarYMostrar = () => {
  carga++;
  if (carga == 100) {
    clearInterval(temporizador);
  }
  fotos.sort(() => Math.random() - 0.5);
  contenedor.innerHTML = "";
  for (let index = 0; index < 50; index++) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", fotos[index]);
    contenedor.appendChild(imagen);
  }
};

let cargarFotos = () => {
  fetch("https://randomuser.me/api?results=1000")
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      fotos = json.results.map((result) => result.picture.large);
      temporizador = setInterval(mezclarYMostrar, 200);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
