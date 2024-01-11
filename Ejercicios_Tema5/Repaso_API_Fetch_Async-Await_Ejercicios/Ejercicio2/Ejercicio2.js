let boton;

let pintaTabla = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    var json = await respuesta.json();

    if (!respuesta.ok) {
        console.log(respuesta.status + ", " + respuesta.statusText);
    } else {
        let tabla = document.createElement("table");
        tabla.style.border = "1px solid black";
        document.body.appendChild(tabla);
        let titleTabla = document.createElement("thead");
        titleTabla.innerHTML = "<tr><th>Título</th><th>Cuerpo</th></tr>";
        tabla.appendChild(titleTabla);
        for (let index = 0; index < json.length; index++) {
            let fila = document.createElement("tr");
            fila.innerHTML += "<td>" + json[index].title + "</td>" + "<td>" + json[index].body + "</td>";
            fila.style.border = "1px solid black";
            tabla.appendChild(fila);
        }
    }

}

let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", pintaTabla);
}


window.addEventListener("DOMContentLoaded", inicio);