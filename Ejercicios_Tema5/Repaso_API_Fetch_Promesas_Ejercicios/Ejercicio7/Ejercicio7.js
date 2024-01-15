let contenedor, boton;

let pintarUsuario = () => {

    fetch("https://randomuser.me/api/").
        then((respuesta) => respuesta.json()).
        then((json) => {
            console.log(json);
            contenedor.innerHTML = "<img src=" + json.results[0].picture.medium + ">"  + 
            "<br>" + json.results[0].name.title + " " +
            json.results[0].name.first + " " +
            json.results[0].name.last
            + "<br>" + json.results[0].email
            + "<br>" + json.results[0].location.city + " (" + json.results[0].location.state + ")";

        })
}

let inicio = () => {
    contenedor = document.getElementById("contenedor");
    boton = document.getElementById("boton").addEventListener("click", pintarUsuario);

}


window.addEventListener("DOMContentLoaded", inicio);