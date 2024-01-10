
async function inicio() {
    let contenedor = document.getElementById("usuario");
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/5");
    json = await respuesta.json();

    if (respuesta.ok) {
        contenedor.innerHTML = "<p>" + "Nombre: " + json.name + "</p>" + "<p>" + "Usuario: " +
            json.username + "</p>" + "<p>" + "Correo: " + json.email + "</p>" + "<p>" + "Dirección: " +
            json.address.street + ", " + json.address.suite + "</p>";
    } else {
        console.log(respuesta.status + "," + respuesta.statusText);
    }
}

window.addEventListener("DOMContentLoaded", inicio);