let tabla, cuerpo;

async function realizarFetch() {
  const response = await fetch("Ej5.json");
  json = await response.json();
  console.log(json.students[0].notas.length);
  for (let index = 0; index < json.students.length; index++) {
    var fila = document.createElement("tr");
    fila.innerHTML =
      "<td>" +
      json.students[index].id +
      "</td>" +
      "<td>" +
      json.students[index].nombre +
      "</td>";

    cuerpo.appendChild(fila);
    var notasFila = document.createElement("td");
    var suma = 0;
    for (let i = 0; i < json.students[index].notas.length; i++) {
      if (i == json.students[index].notas.length - 1) {
        notasFila.innerHTML += json.students[index].notas[i];
        suma += json.students[index].notas[i];
      } else {
        notasFila.innerHTML += json.students[index].notas[i] + ", ";
        suma += json.students[index].notas[i];
      }
      fila.appendChild(notasFila);
    }
    cuerpo.appendChild(fila);
  }
  tabla.appendChild(cuerpo);
}

let inicio = () => {
  tabla = document.getElementById("tabla");
  cuerpo = document.getElementById("cuerpo");
  realizarFetch();
};

window.addEventListener("DOMContentLoaded", inicio);
