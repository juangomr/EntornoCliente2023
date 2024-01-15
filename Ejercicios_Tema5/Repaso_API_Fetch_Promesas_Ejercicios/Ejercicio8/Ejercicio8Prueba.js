let contenedor, boton;

let inicio = () => {
    contenedor = document.getElementById("contenedor");

    fetch("https://randomuser.me/api/?results=10").
        then((respuesta) => respuesta.json()).
        then((json) => {
            console.log(json);
            for (let index = 0; index < json.results.length; index++) {
                datos();
                boton = document.createElement("input");
                boton.setAttribute("type", "button");
                boton.setAttribute("value", "Cambiar");
                boton.addEventListener("click", () => {
                    fetch("https://randomuser.me/api/").
                        then((respuesta) => respuesta.json()).
                        then(() => {
                            datos();
                        })
                });
                contenedor.appendChild(div);
                contenedor.appendChild(boton);
            }
        })
}

let datos = () => {
    let div = document.createElement("div");
    div.innerHTML = "<img src=" +
        json.results[index].picture.medium + ">" +
        "<br>" + json.results[index].name.title + " " +
        json.results[index].name.first + " " +
        json.results[index].name.last +
        "<br>" + json.results[index].email +
        "<br>" + json.results[index].location.city +
        " (" + json.results[index].location.state + ")";
}

window.addEventListener("DOMContentLoaded", inicio);