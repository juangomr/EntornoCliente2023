let boton, imagen, json = {};
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.yesno.wtf/api");

xhr.send();

xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) {
        return;
    }

    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("exito");
        json = JSON.parse(xhr.responseText);
        console.log(json);

    } else {
        console.log("error");
        let message = xhr.statusText || "ocurrió un error";
        xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

});

let insertar = () => {
    imagen.src = json.image;
}


let inicio = () => {
    imagen = document.getElementById("imagen");
    boton = document.getElementById("boton").addEventListener("click", insertar);
}

window.addEventListener("DOMContentLoaded", inicio);