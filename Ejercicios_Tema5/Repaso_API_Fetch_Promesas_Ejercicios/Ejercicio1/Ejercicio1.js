let inicio = () => {
    let contenedor = document.getElementById("usuario");

    fetch("https://jsonplaceholder.typicode.com/users/5")
        .then((respuesta) => respuesta.json())
        .then((json) => {
            contenedor.innerHTML = "<p>" + "Nombre: " + json.name + "</p>" + "<p>" + "Usuario: " +
                json.username + "</p>" + "<p>" + "Correo: " + json.email + "</p>" + "<p>" + "Dirección: " +
                json.address.street + ", " + json.address.suite + "</p>";
            ;
        })
}


window.addEventListener("DOMContentLoaded", inicio)