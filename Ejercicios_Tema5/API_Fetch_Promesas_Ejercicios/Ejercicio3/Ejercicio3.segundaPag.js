let boton, imagen, json = {};


let insertar = (json) => {
    imagen.src = json.image;
}

let realizarFetch = () => {
    fetch("https://www.yesno.wtf/api")
        .then((response) => response.json())
        .then((json) => insertar(json))
        .catch(console.log("error"));
}

let inicio = () => {
    imagen = document.getElementById("imagen");
    boton = document.getElementById("boton").addEventListener("click", realizarFetch);
}

window.addEventListener("DOMContentLoaded", inicio);