let json;

let inicio = () => {
    let evento = document.getElementById("boton");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
            json = JSON.parse(xhr.responseText);
            evento.addEventListener("click", pintaTabla);
        } else {
            console.log("Error: " + xhr.status + "," + xhr.statusText);
        }
    })
}

let pintaTabla = () => {
    let tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    document.body.appendChild(tabla);
    let titleTabla = document.createElement("thead");
    titleTabla.innerHTML = "<tr><th>Título</th><th>Cuerpo</th></tr>";
    tabla.appendChild(titleTabla);
    for (let index = 0; index < json.length; index++) {
        let fila = document.createElement("tr");
        fila.innerHTML += "<td>" + json[index].title + "</td>" + "<td>" + json[index].body + "</td>";
        fila.style.border = "1px solid black";
        tabla.appendChild(fila);
    }
}


window.addEventListener("DOMContentLoaded", inicio);