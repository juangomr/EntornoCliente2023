let contenedor;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jservice.io/api/clues");
xhr.send();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) {
    return;
  }

  if (xhr.status >= 200 && xhr.status < 300) {
    let json = JSON.parse(xhr.responseText);
    console.log("exito");
    console.log(json);
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
  } else {
    console.log("error");
    let message = xhr.statusText || "Error";
    xhr.innerHTML = `Error ${xhr.status}: ${message}`;
  }
});

inicio = (e) => {
  contenedor = document.getElementById("contenedor");
};

window.addEventListener("DOMContentLoaded", inicio);
