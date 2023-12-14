let boton, parrafo;

let insertar = (json) => {
    parrafo.innerHTML = json.answer;
}

let realizarFetch = () => {
    fetch("https://www.yesno.wtf/api")
        .then((response) => response.json())
        .then((json) => insertar(json))
        .catch(console.log("error"));
}

let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", realizarFetch);
    parrafo = document.getElementById("parrafo");
}



window.addEventListener("DOMContentLoaded", inicio);