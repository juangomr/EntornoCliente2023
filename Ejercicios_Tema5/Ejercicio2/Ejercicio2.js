let boton, json;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

xhr.addEventListener("readystatechange", (e) => {

    if (xhr.readyState !== 4) {
        return;
    }

    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("exito");
        json = JSON.parse(xhr.responseText);
    } else {
        console.log("error");
        let message = xhr.statusText || "Ocurrió un error";
        xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

});

let insertar = () => {
    var tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    tabla.style.borderCollapse = "Collapse";

    let fila = document.createElement("tr");
    let columna1 = document.createElement("td");
    let columna2 = document.createElement("td");
    fila.style.border = "1px solid black";
    columna1.style.border = "1px solid black";
    columna2.style.border = "1px solid black";
    columna1.style.textAlign = "Center";
    columna2.style.textAlign = "Center";
    columna1.innerHTML = "User";
    columna2.innerHTML = "Body";
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    tabla.appendChild(fila);
    for (let index = 0; index < json.length; index++) {
        fila = document.createElement("tr");
        columna1 = document.createElement("td");
        columna2 = document.createElement("td");
        columna1.innerHTML = json[index].title;
        columna2.innerHTML = json[index].body;
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.style.border = "1px solid black";
        columna1.style.border = "1px solid black";
        columna2.style.border = "1px solid black";
        columna1.style.textAlign = "Center";
        columna2.style.textAlign = "Center";
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);

}


let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", insertar);

}


window.addEventListener("DOMContentLoaded", inicio);