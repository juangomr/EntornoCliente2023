let boton, imagen;

let gif = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://yesno.wtf/api");
    xhr.send();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            json = JSON.parse(xhr.responseText);
            imagen.setAttribute("src", json.image);
        } else {
            console.log(xhr.status + ", " + xhr.statusText);
        }
    })

}

let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", gif);
    imagen = document.getElementById("imagen");
}


window.addEventListener("DOMContentLoaded", inicio);