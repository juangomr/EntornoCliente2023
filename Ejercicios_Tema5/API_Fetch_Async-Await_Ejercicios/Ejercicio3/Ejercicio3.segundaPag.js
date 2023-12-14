let boton,
  imagen,
  json = {};

let insertar = (json) => {
  imagen.src = json.image;
};

async function realizarFetch() {
  const response = await fetch("https://www.yesno.wtf/api");
  json = await response.json();

  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    insertar(json);
  }
}

let inicio = () => {
  imagen = document.getElementById("imagen");
  boton = document
    .getElementById("boton")
    .addEventListener("click", realizarFetch);
};

window.addEventListener("DOMContentLoaded", inicio);
