let inicio = () => {
    let contenedor = document.getElementById("usuario");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
    xhr.send();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("éxito");

            let json = JSON.parse(xhr.responseText);
            console.log(json);
            contenedor.innerHTML = "<p>" + "Nombre: " + json.name + "</p>" + "<p>" + "Usuario: " + json.username + "</p>" + "<p>" + "Correo: " + json.email + "</p>" + "<p>" + "Dirección: " + json.address.street + ", " + json.address.suite + "</p>";
        } else {
            console.log("error " + xhr.statusText);
        }
    })
}

window.addEventListener("DOMContentLoaded", inicio)