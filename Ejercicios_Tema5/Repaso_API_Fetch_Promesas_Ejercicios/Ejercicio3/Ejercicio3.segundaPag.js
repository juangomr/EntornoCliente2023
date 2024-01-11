let boton, imagen;

let gif = () => {
    fetch("https://yesno.wtf/api")
        .then((respuesta) => respuesta.json())
        .then((json) => {
            imagen.setAttribute("src", json.image);
        })

}


let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", gif);
    imagen = document.getElementById("imagen");
}


window.addEventListener("DOMContentLoaded", inicio);