let tabla, cuerpo;


let inicio = () => {
    tabla = document.getElementById("tabla");
    cuerpo = document.getElementById("cuerpo");

    const xhr = new XMLHttpRequest;
    xhr.open("GET", "Ej5.json");
    xhr.send();

    xhr.addEventListener("load", () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            json = JSON.parse(xhr.responseText);
            console.log(json);

            for (let index = 0; index < json.students.length; index++) {
                let fila = document.createElement("tr");
                fila.innerHTML += "<td>" + json.students[index].id + "</td>" +
                    "<td>" + json.students[index].nombre + "</td>" + "<td>" +
                    json.students[index].notas.join(", ") + "</td>";
                let suma = 0;
                for (let i = 0; i < json.students[index].notas.length; i++) {

                    suma += json.students[index].notas[i];

                }
                fila.innerHTML += "<td>" + (suma / json.students[index].notas.length) + "</td>";
                cuerpo.appendChild(fila);
            }
            tabla.appendChild(cuerpo);

        } else {
            console.log(xhr.status + ", " + xhr.statusText);
        }
    })

}

window.addEventListener("DOMContentLoaded", inicio);