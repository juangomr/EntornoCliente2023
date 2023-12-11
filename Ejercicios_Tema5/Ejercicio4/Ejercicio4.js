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
            lista.innerHTML = "Respuesta: " + json[index].answer + "<br>Pregunta: " + json[index].question + "<br>Categoría: " + json[index].category.title;
            contenedor.appendChild(lista);
        }
    } else {
        console.log("error");
        let message = xhr.statusText || "Error";
        xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

});

inicio = (e) => {
    contenedor = document.getElementById("contenedor");
}


window.addEventListener("DOMContentLoaded", inicio);