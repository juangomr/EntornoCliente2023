let contenedor;


let inicio = () => {
  contenedor = document.getElementById("contenedor");

  fetch("https://jservice.io/api/clues")
    .then((response) => response.json())
    .then((json) => {
      for (let index = 0; index < json.length; index++) {
        let lista = document.createElement("li");
        lista.innerHTML =
          "Categoría: " +
          json[index].category.title +
          "<br>Pregunta: " +
          json[index].question +
          "<br>Respuesta: " +
          json[index].answer;

        contenedor.appendChild(lista);
        lista.style.margin = "1em";
        lista.style.border = "1px dotted black";
        lista.style.listStyle = "none";
      }
    })
    .catch(console.log("error"));
};

window.addEventListener("DOMContentLoaded", inicio);
