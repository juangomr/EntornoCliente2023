let contenedor;
async function realizarFetch() {
  const response = await fetch("https://jservice.io/api/clues");
  json = await response.json();

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
}
inicio = () => {
  contenedor = document.getElementById("contenedor");
  realizarFetch();
};

window.addEventListener("DOMContentLoaded", inicio);
