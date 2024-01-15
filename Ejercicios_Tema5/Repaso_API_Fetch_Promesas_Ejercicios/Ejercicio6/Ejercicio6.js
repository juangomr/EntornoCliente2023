let contenedor;

let inicio = () => {
    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            body: JSON.stringify({
                userId: 11,
                title: "Juan",
                body: "Gomez",
            }),
            headers: { "Content-type": "application/json; charset=UTF-8", },
        }).then((respuesta) => respuesta.json()).
        then(json => {
            contenedor = document.getElementById("contenedor");
            contenedor.innerHTML += json.title + ", " + json.body;


        });


}


window.addEventListener("DOMContentLoaded", inicio);