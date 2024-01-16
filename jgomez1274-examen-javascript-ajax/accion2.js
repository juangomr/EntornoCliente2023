let container, boton, divPrincipal, divPersonaje, imagen, divInfo;
let inicio = () => {
  container = document.getElementById("charactersContainer");
  boton = document.getElementById("b1").addEventListener("click", cargar);
};

let cargar = () => {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      divPrincipal = document.createElement("div");
      divPrincipal.setAttribute("class", "character-row");
      let filas = 0;
      for (let index = 0; index < json.results.length; index++) {
        filas++;
        if (filas == 3) {
          divPrincipal = document.createElement("div");
          divPrincipal.setAttribute("class", "character-row");
          filas = 0;
        }
        divPersonaje = document.createElement("div");
        divPersonaje.setAttribute("class", "character-container");
        divInfo = document.createElement("div");
        divInfo.setAttribute("class", "character-info");
        imagen = document.createElement("img");
        imagen.setAttribute("class", "character-image");
        imagen.setAttribute("src", json.results[index].image);
        divInfo.innerHTML +=
          "ID: " +
          json.results[index].id +
          "<br>" +
          "Nombre: " +
          json.results[index].name +
          "<br>" +
          "Estado: " +
          json.results[index].status +
          "<br>" +
          "Estado: " +
          json.results[index].species;
        var suma = 0;
        for (let i = 0; i < json.results[index].episode.length; i++) {
          suma++;
        }
        divInfo.innerHTML += "<br>" + "Total de episodios: " + suma;
        divPersonaje.appendChild(imagen);
        divPersonaje.appendChild(divInfo);
        divPrincipal.appendChild(divPersonaje);
        container.appendChild(divPrincipal);
      }
    })
    .catch((error) => {
      error = "Error al obtener la receta";
      console.log(error);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
