let boton, parrafo, json;

let insertar = (json) => {
  parrafo.innerHTML = json.answer;
};

async function realizarFetch() {
  const response = await fetch("https://www.yesno.wtf/api");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + ", " + response.statusText);
  } else {
    insertar(json);
  }
}

let inicio = () => {
  boton = document
    .getElementById("boton")
    .addEventListener("click", realizarFetch);
  parrafo = document.getElementById("parrafo");
};

window.addEventListener("DOMContentLoaded", inicio);
